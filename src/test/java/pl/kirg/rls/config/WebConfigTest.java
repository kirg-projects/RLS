package pl.kirg.rls.config;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;

@WebMvcTest
@AutoConfigureMockMvc
class WebConfigTest
{

    @Autowired
    MockMvc mockMvc;

    @Test
    void status404ControllerIsOk() throws Exception
    {
        mockMvc.perform(get("/status4"))
               .andExpect(status().isBadRequest());
    }

    @Test
    void statusHomeControllerIsOk() throws Exception
    {
        mockMvc.perform(get("/"))
               .andExpect(status().isOk())
               .andExpect(view().name("home"));
    }

    @Test
    void statusLoginControllerIsOk() throws Exception
    {
        mockMvc.perform(get("/login"))
               .andExpect(status().isOk())
               .andExpect(view().name("login"));
    }

    @Test
    void statusLogoutControllerIsOk() throws Exception
    {
        mockMvc.perform(get("/logout"))
               .andExpect(status().isOk())
               .andExpect(view().name("logout"));
    }

    @Test
    void statusSignupControllerIsOk() throws Exception
    {
        mockMvc.perform(get("/signup"))
               .andExpect(status().isOk())
               .andExpect(view().name("signup"));
    }

}
