package pl.kirg.rls.security;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.log;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.model;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;

@WebMvcTest
public class WebSecurityConfigTest
{

    public static final String LOGIN_URL = "http://localhost/login";

    @Autowired
    private MockMvc mockMvc;

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
               .andExpect(status().isFound())
               .andExpect(header().stringValues("Location", LOGIN_URL))
               .andDo(log());
    }

    @Test
    public void accessToAdminRedirection() throws Exception
    {
        mockMvc.perform(get("/admin"))
               .andExpect(status().isFound())
               .andExpect(header().stringValues("Location", LOGIN_URL))
               .andDo(log());
    }
}