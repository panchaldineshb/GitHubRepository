package se.blinfo.controller;

import se.blinfo.sessionexceptions.ServiceException;
import java.time.LocalDateTime;
import se.blinfo.entity.Session;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.NoResultException;
import javax.persistence.TypedQuery;
import se.blinfo.entity.Settings;

/**
 *
 * @author jorawar
 */
public class SessionController {

    private final EntityManagerFactory emf;

    public SessionController(EntityManagerFactory emf) {
        this.emf = emf;
    }

    public EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    //hämtar all från db
    public List<Session> getAll() {
        EntityManager em = null;
        TypedQuery<Session> query = null;
        try {
            em = getEntityManager();
            em.getTransaction().begin();
            query = em.createQuery("from Session", Session.class);
            em.getTransaction().commit();
            return query.getResultList();
        } catch (Exception e) {
            throw new ServiceException("det gick inte hämta ", e);
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    //hämtar med id
    public Session getById(String id) {
        EntityManager em = null;
        try {
            em = getEntityManager();
            em.clear();
            Session session = em.find(Session.class, id);
            return session;
        } catch (Exception e) {
            throw new ServiceException("gick inte hämta id :- " + id, e);
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    /**
     * Persist session with lifetime from settings table.
     *
     * @param sessionModel
     * @return
     */
    public Session createSession(Session sessionModel) {
        EntityManager em = null;
        try {
            em = getEntityManager();
            em.getTransaction().begin();
            sessionModel.setExire(getExpires());
            em.persist(sessionModel);
            em.getTransaction().commit();
        } catch (Exception e) {
            throw new ServiceException("det gick inte skapa ny session", e);
        } finally {
            if (em != null) {
                em.close();
            }
        }
        return sessionModel;
    }

    //updaterar
    public Session updateSession(Session s) {
        EntityManager em = null;
        Session session = null;
        try {
            em = getEntityManager();
            session = em.find(Session.class, s.getUUID());
            em.getTransaction().begin();
            session.setUserfirstname(s.getUserfirstname());
            session.setUserlastname(s.getUserlastname());
            session.setUsername(s.getUsername());
            session.setUseremail(s.getUseremail());
            session.setSessionstatus(s.isActive());
            session.setDepartment(s.getDepartment());
            session.setExire(s.getExire());
            em.getTransaction().commit();
        } catch (Exception e) {
            throw new ServiceException("det gick inte uppdatera session med id " + session.getUUID(), e);
        } finally {
            if (em != null) {
                em.close();
            }
        }
        return session;
    }

    //tar bort
    public void removeSession(String id) {
        EntityManager em = null;
        Session sessionModel = null;
        try {
            em = getEntityManager();
            sessionModel = em.find(Session.class, id);
            em.getTransaction().begin();
            em.remove(sessionModel);
            em.getTransaction().commit();
        } catch (Exception e) {
            throw new ServiceException("det gick inte ta bort session med id :-" + id, e);
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    //default tid som varje ny skapat session få
    public LocalDateTime getExpires() {
        return LocalDateTime.now().plusHours(getDefaultSessionLifeTime());
    }

    public Integer getDefaultSessionLifeTime() {
        EntityManager em = null;
        SettingController settingController = new SettingController(emf);
        try {
            em = getEntityManager();
            Settings st = settingController.getSettingById(2);
            return Integer.valueOf(st.getSetingvalue());
        } catch (Exception e) {
            Logger.getLogger(SessionController.class.getName()).log(Level.WARNING, "Unable to fetch default lifetime from database. Setting 24 h");
            return new Integer("24");
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    //kollar om session gäller eller inte svarar med boolean
    public boolean isSessionValid(String id) {
        Session sessionModel = null;
        EntityManager em = null;
        try {
            em = getEntityManager();
            sessionModel = em.find(Session.class, id);
            return LocalDateTime.now().isBefore(sessionModel.getExire()) && sessionModel.isActive();
        } catch (Exception e) {
            throw new ServiceException("det gick inte kolla status på session med id :-" + id, e);
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    //kolla om användaren finns
    //TODO funkar inte?
    public Session cheackIfUserExists(String username) {
        EntityManager em = null;
        Session sessionModel = null;
        TypedQuery<Session> query = null;
        try {
            em = getEntityManager();
            query = em.createQuery("select s from Session s where s.username =" + "'" + username + "'", Session.class);
            sessionModel = query.getSingleResult();
        } catch (NoResultException e) {
            Logger.getLogger(SessionController.class.getName()).log(Level.INFO, "User: " + username + " not found");
        } finally {
            if (em != null) {
                em.close();
            }
        }
        return sessionModel;
    }

    //den metod tar emot en boolean och ändrar alla rader i db
    public List<Session> manageAll(boolean status) {
        EntityManager em = null;
        List<Session> sm = null;
        try {
            em = getEntityManager();
            em.getTransaction().begin();
            int change = em.createQuery("update Session set isactive = :status").setParameter("status", status).executeUpdate();
            em.getTransaction().commit();
            sm = getAll();
        } catch (Exception e) {
            throw new ServiceException("gick inte ändra status på alla session", e);
        } finally {
            if (em != null) {
                em.close();
            }
        }
        return sm;
    }

    //den tar emot en id och status på att om session ska gälla eller inte
    public Session ValidateSession(String id, boolean isValid) {
        EntityManager em = null;
        Session sm = null;
        try {
            em = getEntityManager();
            sm = em.find(Session.class, id);
            em.getTransaction().begin();
            sm.setSessionstatus(isValid);
            em.getTransaction().commit();
        } catch (Exception e) {
            Logger.getLogger(SessionController.class.getName()).log(Level.SEVERE, "cannot validate session", e);
        } finally {
            if (em != null) {
                em.close();
            }
        }
        return sm;
    }
}
