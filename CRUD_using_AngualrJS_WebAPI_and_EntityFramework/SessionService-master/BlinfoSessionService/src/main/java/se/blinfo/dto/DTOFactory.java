/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package se.blinfo.dto;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;
import se.blinfo.entity.Session;
import se.blinfo.entity.Settings;

/**
 *
 * @author jorawar
 */
public class DTOFactory {

    public SessionDTO getSessionDTO(Session sm) {
        SessionDTO dto = new SessionDTO();
        dto.setId(sm.getUUID());
        dto.setUserfirstname(sm.getUserfirstname());
        dto.setUserlastname(sm.getUserlastname());
        dto.setUseremail(sm.getUseremail());
        dto.setExire(sm.getExire().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
        dto.setUsername(sm.getUsername());
        dto.setIsactive(sm.isActive());
        dto.setDeparment(sm.getDepartment());
        return dto;
    }

    public SessionListDTO getAllSessionDTO(List<Session> sessionModel) {
        SessionListDTO dto = new SessionListDTO();
        sessionModel.stream().forEach((u) -> {
            dto.add(getSessionDTO(u));
        });
        return dto;
    }

    public SettingsListDTO getAllSettings(List<Settings> settings) {
        SettingsListDTO dto = new SettingsListDTO();
        settings.stream().forEach((s) -> {
            dto.add(getSettingDTO(s));
        });
        return dto;
    }

    public Session toSessionModel(SessionDTO session) {
        Session sessionModel = new Session();
        UUID randomUUID = UUID.randomUUID();
        sessionModel.setUUID(randomUUID.toString().replaceAll("-", ""));
        sessionModel.setUserfirstname(session.getUserfirstname());
        sessionModel.setUserlastname(session.getUserlastname());
        sessionModel.setUsername(session.getUsername());
        sessionModel.setUseremail(session.getUseremail());
        sessionModel.setSessionstatus(session.getIsactive());
        sessionModel.setDepartment(session.getDeparment());
        LocalDateTime SessionLifeTime = LocalDateTime.parse(session.getExire(), DateTimeFormatter.ISO_LOCAL_DATE_TIME);
        sessionModel.setExire(SessionLifeTime);
        return sessionModel;
    }

    public Session updateSessionModel(SessionDTO session) {
        Session sessionModel = new Session();
        sessionModel.setUUID(session.getId());
        sessionModel.setUserfirstname(session.getUserfirstname());
        sessionModel.setUserlastname(session.getUserlastname());
        sessionModel.setUsername(session.getUsername());
        sessionModel.setUseremail(session.getUseremail());
        sessionModel.setSessionstatus(session.getIsactive());
        sessionModel.setDepartment(session.getDeparment());
        LocalDateTime SessionLifeTime = LocalDateTime.parse(session.getExire(), DateTimeFormatter.ISO_LOCAL_DATE_TIME);
        sessionModel.setExire(SessionLifeTime);
        return sessionModel;
    }

    public Session changeStatus(SessionDTO session) {
        Session sessionModel = new Session();
        sessionModel.setSessionstatus(session.getIsactive());
        return sessionModel;
    }

    public Settings toSettings(SettingDTO settingDTO) {
        Settings setting = new Settings();
        setting.setSettingkey(settingDTO.getSettingkey());
        setting.setSettingvalue(settingDTO.getSettingvalue());
        return setting;
    }

    public SettingDTO getSettingDTO(Settings setting) {
        SettingDTO dto = new SettingDTO();
        dto.setId(setting.getId());
        dto.setSettingkey(setting.getSettinkey());
        dto.setSettingvalue(setting.getSetingvalue());
        return dto;
    }

    public CreateSessionResponseDTO getCreateSessionReponseDTO(Session sm) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("EEE, dd MMM yy HH:mm:ss 'GMT'"); //HTTP cookie datetime format
        String expiresStr = formatter.format(sm.getExire());
        return new CreateSessionResponseDTO(sm.getUUID(), expiresStr);
    }
}
