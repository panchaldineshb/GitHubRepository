/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package se.blinfo.session.client;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;

/**
 *
 * @author jep
 */
public class SessionClient {

    private final String baseUrl = "http://apiproxy.blinfo.se/sessions/";
    private final String sessionId;

    public SessionClient(String sessionId) {
        this.sessionId = sessionId;
    }

    public boolean isValidSession() {
        String call = call("isvalid/" + sessionId);
        String trim = call.trim();
        return "true".equalsIgnoreCase(trim);
    }

    public Session fetch() {
        String response = call(sessionId);
        JSONObject json = (JSONObject) JSONValue.parse(response);
        String firstname = (String) json.get("firstname");
        String lastname = (String) json.get("lastname");
        String username = (String) json.get("username");
        String email = (String) json.get("email");
        String department = (String) json.get("department");
        Session session = new Session(firstname, lastname, email, department, username);
        return session;
    }

    private String call(String path) {
        URL sessionServiceUrl;
        try {
            sessionServiceUrl = new URL(baseUrl + path);
            URLConnection yc;
            try {
                yc = sessionServiceUrl.openConnection();
                yc.setConnectTimeout(5 * 1000); //5 sekunder
                yc.setReadTimeout(5 * 1000);
                yc.connect();
                BufferedReader in = new BufferedReader(new InputStreamReader(yc.getInputStream()));
                String response = in.readLine();
                in.close();
                return response;
            } catch (IOException ex) {
                Logger.getLogger(SessionClient.class.getName()).log(Level.INFO, "Kunde inte hämta session-data. Orsak: " + ex.getClass().getName() + ":" + ex.getMessage()
                );
            }
        } catch (MalformedURLException ex) {
            Logger.getLogger(SessionClient.class.getName()).log(Level.SEVERE, "Ogiltig url", ex);
        }
        return "false";
    }

    public static void main(String[] args) {
        SessionClient sessionClient = new SessionClient("");
        if (sessionClient.isValidSession()) {
            Session session = sessionClient.fetch();
            System.out.println(session.getEmail());
            System.out.println(session.getFirstName());
            System.out.println(session.getLastName());
            System.out.println(session.getUserName());
            System.out.println(session.getDepartment());
        }
    }
}
