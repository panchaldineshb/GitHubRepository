package se.blinfo.session.client;

/**
 *
 * @author jep
 */
public class Session {
    
    
    private final String firstName;
    private final String lastName;
    private final String email;
    private final String department;
    private final String userName;

    public Session(String firstName, String lastName, String email, String department, String userName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.department = department;
        this.userName = userName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getDepartment() {
        return department;
    }

    public String getUserName() {
        return userName;
    }
}
