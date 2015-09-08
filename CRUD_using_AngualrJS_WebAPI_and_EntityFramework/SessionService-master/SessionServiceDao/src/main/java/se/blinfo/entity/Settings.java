package se.blinfo.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 *
 * @author js
 */
@Entity
public class Settings implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column()
    private int id;
    @Column(unique = true)
    private String settingkey;
    @Column
    private String settingvalue;

    public void setId(int id) {
        this.id = id;
    }
    
    public String getSettinkey() {
        return settingkey;
    }

    public void setSettingkey(String settingkey) {
        this.settingkey = settingkey;
    }

    public String getSetingvalue() {
        return settingvalue;
    }

    public void setSettingvalue(String settingvalue) {
        this.settingvalue = settingvalue;
    }

    public int getId() {
        return id;
    }

}
