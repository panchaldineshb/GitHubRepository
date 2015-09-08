package se.blinfo.dto;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author jorawar
 */
public class SessionListDTO {
    private final List<SessionDTO> sessions = new ArrayList<>();
    public List<SessionDTO> getSessions(){
        return sessions;
    }
    public void add(SessionDTO dto){
        sessions.add(dto);
    }
}
