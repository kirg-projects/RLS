package pl.kirg.rls.security;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.log;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class WebSecurityConfigTest
{

    public static final String BASE_URL = "https://localhost/";
    public static final String LOGIN_URL = BASE_URL.concat("login");
    public static final String ACTUATOR_URL = BASE_URL.concat("act");
    public static final String ADMIN_URL = BASE_URL.concat("admin");
    public static final String MANAGER_URL = BASE_URL.concat("manager");
    public static final String SHOP_URL = BASE_URL.concat("shop");

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void accessToActuatorDenied() throws Exception
    {
        mockMvc.perform(get(ACTUATOR_URL))
               .andExpect(status().is3xxRedirection())
               .andExpect(header().stringValues("Location", LOGIN_URL))
               .andDo(log());
    }
}