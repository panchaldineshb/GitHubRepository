/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package se.blinfo.entity;

import java.io.Serializable;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import org.hibernate.annotations.Type;

/**
 *
 * @author jorawar
 */
@Entity
public class Session implements Serializable {

    @Id
    @Column(unique = true)
    private String UUID;
    @Column
    private String userfirstname;
    @Column
    private String userlastname;
    @Column(unique = true)
    private String username;
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    @Type(type = "se.blinfo.datetime.LocalDateTimeUserType")
    private LocalDateTime exire;
    @Column
    private String useremail;
    @Column
    private boolean isactive;
    @Column
    private String department;

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
    public String getUUID() {
        return UUID;
    }

    public void setUUID(String UUID) {
        this.UUID = UUID;
    }

    public boolean isActive() {
        return isactive;
    }

    public void setSessionstatus(boolean isActive) {
        this.isactive = isActive;
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

    public LocalDateTime getExire() {
        return exire;
    }

    public void setExire(LocalDateTime exire) {
        this.exire = exire;
    }

    public String getUseremail() {
        return useremail;
    }

    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }
}
