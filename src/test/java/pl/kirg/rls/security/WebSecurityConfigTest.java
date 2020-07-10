package pl.kirg.rls.security;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest
public class WebSecurityConfigTest
{

    public static final String LOGIN_URL = "http://localhost/login";

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void accessToShopRedirection() throws Exception
    {
        mockMvc.perform(get("/shop"))
               .andExpect(status().isFound())
               .andExpect(header().stringValues("Location", LOGIN_URL))
               .andDo(print());
    }

    @Test
    public void accessToAdminRedirection() throws Exception
    {
        mockMvc.perform(get("/admin"))
               .andExpect(status().isFound())
               .andExpect(header().stringValues("Location", LOGIN_URL))
               .andDo(print());
    }
}