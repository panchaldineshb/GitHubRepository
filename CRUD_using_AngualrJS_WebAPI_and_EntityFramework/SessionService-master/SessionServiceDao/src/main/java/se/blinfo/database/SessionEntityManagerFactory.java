package se.blinfo.database;

import java.util.HashMap;
import java.util.Map;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author jep
 */
public class SessionEntityManagerFactory {

    private static final EntityManagerFactory emf;

    static {
        emf = Persistence.createEntityManagerFactory("se.blinfo-jpa", getDatabaseProperties());
    }

    private static Map<String, String> getDatabaseProperties() {
        Map<String, String> map = new HashMap<>();

        String host = System.getProperty("session-service-mysql.host", "localhost");
        String port = System.getProperty("session-service-mysql.port", "3306");
        String database = System.getProperty("session-service-mysql.database", "blsession");
        String username = System.getProperty("session-service-mysql.username", "ssadmin");
        String password = System.getProperty("session-service-mysql.password", "fritspendu");

        map.put("javax.persistence.jdbc.url", "jdbc:mysql://" + host + ":" + port + "/" + database);
        map.put("javax.persistence.jdbc.user", username);
        map.put("javax.persistence.jdbc.password", password);

        System.out.println("mysql properties:" + map);

        return map;
    }

    public static EntityManagerFactory getEmf() {
        return emf;
    }
    
}
