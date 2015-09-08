package se.blinfo.resources;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import se.blinfo.dto.DTOFactory;
import se.blinfo.entity.Session;
import java.net.URISyntaxException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;
import javax.ws.rs.core.SecurityContext;
import se.blinfo.sessionexceptions.ServiceException;
import se.blinfo.controller.AdminController;
import se.blinfo.dto.SessionDTO;
import se.blinfo.controller.SessionController;
import se.blinfo.database.SessionEntityManagerFactory;
import se.blinfo.entity.Admin;

/**
 *
 * @author jorawar
 */
@Path("/sessions")
public class SessionServiceResources {

    SecurityContext securityContext;
    private final SessionController serviceController = new SessionController(SessionEntityManagerFactory.getEmf());

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getSession(@PathParam("id") String id) {
        try {
            Session session = serviceController.getById(id);
            if (session == null) {
                return Response.status(Response.Status.NOT_FOUND).build();
            }
            return Response.ok(new DTOFactory().getSessionDTO(session)).build();
        } catch (ServiceException e) {
            return Response.serverError().entity("{\"error\": \"" + e.getMessage() + "\",\"cause\": \"" + e.getCauseMsg() + "\"}").build();
        }

    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getSessions() {
        try {
            List<Session> sessions = serviceController.getAll();
            return Response.ok(new DTOFactory().getAllSessionDTO(sessions)).build();
        } catch (ServiceException e) {
            return Response.serverError().entity("{\"error\": \"" + e.getMessage() + "\",\"cause\": \"" + e.getCauseMsg() + "\"}").build();
        }

    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response createSession(SessionDTO sessiondto) {
        try {
            Session session = serviceController.cheackIfUserExists(sessiondto.getUsername());
            if (session == null) {
                session = new Session();
                UUID randomUUID = UUID.randomUUID();
                session.setUUID(randomUUID.toString().replaceAll("-", ""));
                session.setUserfirstname(sessiondto.getUserfirstname());
                session.setUserlastname(sessiondto.getUserlastname());
                session.setUsername(sessiondto.getUsername());
                session.setUseremail(sessiondto.getUseremail());
                session.setSessionstatus(true);
                session.setDepartment(sessiondto.getDeparment());
                session = serviceController.createSession(session);
            } else {
                session.setUUID(session.getUUID());
                session.setUserfirstname(sessiondto.getUserfirstname());
                session.setUserlastname(sessiondto.getUserlastname());
                session.setUsername(sessiondto.getUsername());
                session.setUseremail(sessiondto.getUseremail());
                //Förläng sessionen
                Integer defaultSessionLifeTimeInHours = serviceController.getDefaultSessionLifeTime();
                LocalDateTime newExpire = LocalDateTime.now().plusHours(defaultSessionLifeTimeInHours);
                session.setExire(newExpire);
                session.setSessionstatus(true);
                session.setDepartment(sessiondto.getDeparment());
                session = serviceController.updateSession(session);
            }
            return Response.ok(new DTOFactory().getCreateSessionReponseDTO(session)).build();
        } catch (ServiceException e) {
            return Response.serverError().entity("{\"error\": \"" + e.getMessage() + "\",\"cause\": \"" + e.getCauseMsg() + "\"}").build();
        }
    }

    @PUT
    @Consumes("application/json")
    @Produces("application/json")
    @Path("{id}")
    public Response updateSession(@PathParam("id") String id, SessionDTO sessionDTO) {
        try {
            Session sessionModel = serviceController.updateSession(new DTOFactory().updateSessionModel(sessionDTO));
            return Response.ok(new DTOFactory().getSessionDTO(sessionModel)).build();
        } catch (ServiceException e) {
            return Response.serverError().entity("{\"error\": \"" + e.getMessage() + "\",\"cause\": \"" + e.getCauseMsg() + "\"}").build();
        }
    }

    @DELETE
    @Path("{id}")
    public Response deleteSession(@PathParam("id") String id) throws URISyntaxException {
        try {
            serviceController.removeSession(id);
            return Response.status(Response.Status.OK).entity("detelted").build();
        } catch (ServiceException e) {
            return Response.serverError().entity("{\"error\": \"" + e.getMessage() + "\",\"cause\": \"" + e.getCauseMsg() + "\"}").build();
        }

    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("isvalid/{id}")
    public boolean IsSessionValid(@PathParam("id") String id) {
        try {
            return serviceController.isSessionValid(id);
        } catch (ServiceException e) {
            //Invalid session
            return false;
        }
    }

    @Path("/{id}/{status}")
    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    public Response manageSession(@PathParam("id") String id, @PathParam("status") boolean isValid) {
        try {
            Session session = serviceController.ValidateSession(id, isValid);
            return Response.ok(new DTOFactory().getSessionDTO(session)).build();
        } catch (ServiceException e) {
            return Response.serverError().entity("{\"error\": \"" + e.getMessage() + "\",\"cause\": \"" + e.getCauseMsg() + "\"}").build();
        }
    }

    @PUT
    @Path("manage/{status}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response manageAllSesssion(@PathParam("status") boolean status) {
        try {
            List<Session> sessions = serviceController.manageAll(status);
            return Response.ok(new DTOFactory().getAllSessionDTO(sessions)).build();
        } catch (ServiceException e) {
            return Response.serverError().entity("{\"error\": \"" + e.getMessage() + "\",\"cause\": \"" + e.getCauseMsg() + "\"}").build();
        }
    }

    @POST
    @Path("authoriz")
    @Produces(MediaType.APPLICATION_JSON)
    public boolean login(Admin sessionAdmin) {
        AdminController as = new AdminController(SessionEntityManagerFactory.getEmf());
        return as.authorizeSession(sessionAdmin.getUsername(), sessionAdmin.getPassword());
    }
}
