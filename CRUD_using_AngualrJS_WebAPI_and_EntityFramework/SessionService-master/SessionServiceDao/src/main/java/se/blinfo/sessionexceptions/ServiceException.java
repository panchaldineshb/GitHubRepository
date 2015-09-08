package se.blinfo.sessionexceptions;

/**
 *
 * @author js
 */
public class ServiceException extends RuntimeException {

    private String causeMsg;

    public ServiceException(String errorMsg, Exception e) {
        super(errorMsg, e);
    }

    public String getCauseMsg() {
        return causeMsg;
    }

}
