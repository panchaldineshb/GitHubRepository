package se.blinfo.controller;

import se.blinfo.sessionexceptions.ServiceException;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.TypedQuery;
import se.blinfo.entity.Settings;

/**
 *
 * @author js
 */
public class SettingController {
    
    private final EntityManagerFactory emf;

    public SettingController(EntityManagerFactory emf) {
        this.emf = emf;
    }

    public  EntityManager getEntityManager() {
        return emf.createEntityManager();
    }
    //hämtar alla
    public List<Settings> getSettings(){
        EntityManager em = null;
        TypedQuery<Settings> query = null;
        try {
            em = getEntityManager();
            em.getTransaction().begin();
            query = em.createQuery("from Settings", Settings.class);
            em.getTransaction().commit();
            return query.getResultList();
        } catch (Exception e) {
           throw new ServiceException("gick inte hämta", e);
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }
    //hämtar med id

    public  Settings getSettingById(int id) {
        EntityManager em = null;
        Settings st = null;
        try {
            em = getEntityManager();
            em.getTransaction().begin();
            st = em.find(Settings.class, id);
            em.getTransaction().commit();
        } catch (Exception e) {
           throw new ServiceException("gick inte hämta", e);
        } finally {
            if (em != null) {
                em.close();
            }
        }
        return st;
    }

    //uppdaterar settings
    public  Settings updateSetting(Settings setting,int id) {
        EntityManager em = null;
        try {
            em = getEntityManager();
            Settings st = em.find(Settings.class, id);
            System.out.println(setting.getSettinkey() + setting.getSetingvalue());
            em.getTransaction().begin();
            st.setSettingvalue(setting.getSetingvalue());
            System.out.println("comitat");
            em.getTransaction().commit();
            return setting;
        } catch (Exception e) {
            throw new ServiceException("det gick inte uppdatera settings", e);
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }
}
