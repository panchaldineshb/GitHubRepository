package se.blinfo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 *
 * @author js
 */
public class SettingDTO {

    @JsonProperty("id")
    private int id;
    @JsonProperty("settingkey")
    private String settingkey;
    @JsonProperty("settingvalue")
    private String settingvalue;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSettingkey() {
        return settingkey;
    }

    public void setSettingkey(String settingkey) {
        this.settingkey = settingkey;
    }

    public String getSettingvalue() {
        return settingvalue;
    }

    public void setSettingvalue(String settingvalue) {
        this.settingvalue = settingvalue;
    }

}
