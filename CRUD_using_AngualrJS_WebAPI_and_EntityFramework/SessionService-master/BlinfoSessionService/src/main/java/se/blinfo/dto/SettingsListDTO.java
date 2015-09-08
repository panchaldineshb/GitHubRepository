/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package se.blinfo.dto;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author js
 */
public class SettingsListDTO {
    private final List<SettingDTO> settings = new ArrayList<>();
    public List<SettingDTO> getSettings(){
        return settings;
    }
    public void add(SettingDTO settingsDTO){
        settings.add(settingsDTO);
    }
}
