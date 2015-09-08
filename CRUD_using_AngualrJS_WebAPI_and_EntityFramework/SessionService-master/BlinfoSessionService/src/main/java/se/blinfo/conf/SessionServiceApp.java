/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package se.blinfo.conf;

import javax.ws.rs.ApplicationPath;
import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.media.multipart.MultiPartFeature;
import org.glassfish.jersey.server.ResourceConfig;
import se.blinfo.resources.SessionServiceResources;
import se.blinfo.rest.filter.RequestFilter;

/**
 *
 * @author js
 */
@ApplicationPath("resources")
public class SessionServiceApp extends ResourceConfig {

    public SessionServiceApp() {
        super(RequestFilter.class, SessionServiceResources.class);
        packages("se.blinfo");
        register(JacksonFeature.class);
        register(MultiPartFeature.class);
    }
}
