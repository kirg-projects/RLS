package pl.kirg.rls.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/register")
public class RegisterController {

    @GetMapping
    public String register(Model model){
        model.addAttribute("name","RegisterModel");
        return "vRegister";
    }
}
