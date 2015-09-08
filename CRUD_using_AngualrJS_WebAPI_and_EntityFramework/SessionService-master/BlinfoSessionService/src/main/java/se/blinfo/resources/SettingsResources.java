/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package se.blinfo.resources;

import se.blinfo.sessionexceptions.ServiceException;
import java.time.LocalDateTime;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import se.blinfo.controller.SessionController;
import se.blinfo.dto.DTOFactory;
import se.blinfo.dto.SettingDTO;
import se.blinfo.controller.SettingController;
import se.blinfo.database.SessionEntityManagerFactory;
import se.blinfo.entity.Session;
import se.blinfo.entity.Settings;

/**
 *
 * @author js
 */
@Path("settings")
public class SettingsResources {

    SecurityContext securityContext;

    @GET    
    @Produces(MediaType.APPLICATION_JSON)
    public Response getById() {
        SettingController sessionController = new SettingController(SessionEntityManagerFactory.getEmf());
       List<Settings> st = sessionController.getSettings();
        return Response.ok(new DTOFactory().getAllSettings(st)).build();
    }

    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateSettings(@PathParam("id") int id, SettingDTO setting) {
        try {
        SettingController settingController = new SettingController(SessionEntityManagerFactory.getEmf());
        Settings st = settingController.updateSetting(new DTOFactory().toSettings(setting), id);
        return Response.ok(st).build();    
        } catch (ServiceException e) {
             return Response.serverError().entity("{\"error\": \"" + e.getMessage() + "\",\"cause\": \"" + e.getCauseMsg() + "\"}").build();
        }
        
    }

    @POST
    @Path("days/{days}")
    public Response deleteByDays(@PathParam("days") int days) {
          SessionController sessionController = new SessionController(SessionEntityManagerFactory.getEmf());
        List<Session> sessionModel = sessionController.getAll();
         sessionModel.stream().forEach((s) -> {
                if (s.getExire().isBefore(LocalDateTime.now().minusDays(days))) {
                    sessionController.removeSession(s.getUUID());
                }
         });
        return Response.ok().build();
    }

    @POST
    @Path("hour/{hours}")
    public Response validateByUser(@PathParam("hours") int hour) {
       SessionController sessionController = new SessionController(SessionEntityManagerFactory.getEmf());
        List<Session> sessions = sessionController.getAll();
        sessions.stream().forEach((s) -> {  
            if (s.getExire().isBefore(LocalDateTime.now().minusHours(hour))) {
                sessionController.ValidateSession(s.getUUID(), false);
            }
        });
        return Response.ok().build();
    }
}
