package pl.kirg.rls.security;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.log;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.model;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;

@WebMvcTest
public class WebSecurityConfigTest
{

    public static final String BASE_URL = "http://localhost/";
    public static final String LOGIN_URL = BASE_URL.concat("login");

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void basicAuthenticationWorks() throws Exception
    {
        final String headerName = "WWW-Authenticate";
        final String headerValue = "Basic realm=\"Realm\"";

        RequestBuilder request = post(LOGIN_URL)
                .param("user", "testuser")
                .param("password", "password");

        mockMvc.perform(request)
               .andExpect(header().stringValues(headerName, headerValue))
               .andDo(log());
    }

    @Test
    public void accessToHomePage() throws Exception
    {
        mockMvc.perform(get(BASE_URL))
               .andExpect(status().isOk())
               .andExpect(view().name("home"))
               .andDo(log());
    }

    @Test
    public void loginPageExists() throws Exception
    {
        mockMvc.perform(get(LOGIN_URL))
               .andExpect(model().hasNoErrors())
               .andExpect(view().name("login"))
               .andExpect(content().contentType(MediaType.TEXT_HTML))
               .andDo(log());
    }

    @Test
    public void accessToShopRedirection() throws Exception
    {
        mockMvc.perform(get("/shop"))
               .andExpect(status().isUnauthorized())
               .andExpect(header().stringValues("Location", LOGIN_URL))
               .andDo(log());
    }

    @Test
    public void accessToAdminRedirection() throws Exception
    {
        mockMvc.perform(get("/admin"))
               .andExpect(status().isUnauthorized())
               .andExpect(header().stringValues("Location", LOGIN_URL))
               .andDo(log());
    }

    @Test
    public void performLogin() throws Exception
    {
        this.loginPageExists();

        RequestBuilder request = post(LOGIN_URL)
                .param("user", "testuser")
                .param("password", "password");

        mockMvc.perform(request)
               .andExpect(status().isOk())
               .andDo(log());
    }

    @Test
    public void performFakeLogin() throws Exception
    {
        this.loginPageExists();

        RequestBuilder request = post(LOGIN_URL)
                .param("user", "fakeUser")
                .param("password", "password");

        mockMvc.perform(request)
               .andExpect(status().isUnauthorized())
               .andDo(log());
    }

    @Test
    public void accessToActuatorDenied() throws Exception
    {
        mockMvc.perform(get("/act/"))
               .andExpect(status().is4xxClientError())
               .andDo(log());
    }
}