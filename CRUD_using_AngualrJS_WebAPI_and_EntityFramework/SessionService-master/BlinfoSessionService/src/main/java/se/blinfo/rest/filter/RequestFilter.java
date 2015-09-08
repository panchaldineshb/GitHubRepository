/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package se.blinfo.rest.filter;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author js
 */
public class RequestFilter implements Filter {

    public static final String AUTHENTICATION_HEADER = "Authorization";

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filter) throws IOException, ServletException {
        if (request instanceof HttpServletRequest) {
            HttpServletRequest hsq = (HttpServletRequest) request;
            String authCredentails = hsq.getHeader(AUTHENTICATION_HEADER);

            BasicAuthenticationHandler authenticationService = new BasicAuthenticationHandler();
            boolean authenticatiStatus = authenticationService.authenticate(authCredentails);
            if (authenticatiStatus) {
                filter.doFilter(request, response);
            } else {
                if (response instanceof HttpServletRequest) {
                } else {
                    HttpServletResponse hsr;
                    hsr = (HttpServletResponse) response;
                    hsr.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                }
            }
        }
    }

    @Override
    public void destroy() {
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

}
