/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package se.blinfo.controller;

import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.NoResultException;
import javax.persistence.TypedQuery;
import se.blinfo.entity.Admin;

/**
 *
 * @author js
 */
public class AdminController {

    private final EntityManagerFactory emf;

    public AdminController(EntityManagerFactory emf) {
        this.emf = emf;
    }

    public EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    //kollar inlogning
    public boolean authorizeSession(String username, String password) {
        EntityManager em = null;
        Admin sessionAdmin = null;
        TypedQuery<Admin> query = null;
        try {
            em = getEntityManager();
            em.getTransaction().begin();
            query = em.createQuery("select s from Admin s where s.username =" + "'" + username + "'", Admin.class);
            em.getTransaction().commit();
            sessionAdmin = query.getSingleResult();
            if (query != null) {
                return sessionAdmin.getUsername().equals(username) && sessionAdmin.getPassword().equals(password);
            } else if (query == null) {
                return false;
            }
        } catch (NoResultException e) {
            Logger.getLogger(AdminController.class.getName()).log(Level.INFO, "User: " + username + " not found");
        } finally {
            if (em != null) {
                em.close();
            }
        }
        return false;
    }
}
