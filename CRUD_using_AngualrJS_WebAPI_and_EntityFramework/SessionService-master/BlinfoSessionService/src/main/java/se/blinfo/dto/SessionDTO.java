package se.blinfo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 *
 * @author jorawar
 */
public class SessionDTO {

    public SessionDTO() {

    }
    private String id;
    @JsonProperty("firstname")
    private String userfirstname;
    @JsonProperty("lastname")
    private String userlastname;
    @JsonProperty("username")
    private String username;
    @JsonProperty("expiredate")
    private String exire;
    @JsonProperty("email")
    private String useremail;
    @JsonProperty("isactive")
    private boolean isactive = true;
    @JsonProperty("department")
    private String deparment;

    public String getDeparment() {
        return deparment;
    }

    public void setDeparment(String deparment) {
        this.deparment = deparment;
    }
    public boolean getIsactive() {
        return isactive;
    }

    public void setIsactive(boolean isactive) {
        this.isactive = isactive;
    }
    public String getUserfirstname() {
        return userfirstname;
    }

    public void setUserfirstname(String userfirstname) {
        this.userfirstname = userfirstname;
    }

    public String getUserlastname() {
        return userlastname;
    }

    public void setUserlastname(String userlastname) {
        this.userlastname = userlastname;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getExire() {
        return exire;
    }

    public void setExire(String exire) {
        this.exire = exire;
    }

    public String getUseremail() {
        return useremail;
    }

    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

}
