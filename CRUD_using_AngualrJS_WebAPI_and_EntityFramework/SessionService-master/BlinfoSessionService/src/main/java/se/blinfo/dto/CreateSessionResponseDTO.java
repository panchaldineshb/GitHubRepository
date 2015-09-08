package se.blinfo.dto;

/**
 *
 * @author jep
 */
public class CreateSessionResponseDTO {
    
    private String id;
    private String expires;

    public CreateSessionResponseDTO(String id, String expires) {
        this.id = id;
        this.expires = expires;
    }

    public String getId() {
        return id;
    }

    public String getExpires() {
        return expires;
    }
    
}
