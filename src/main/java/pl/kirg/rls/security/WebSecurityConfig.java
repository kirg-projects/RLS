package pl.kirg.rls.security;

import org.springframework.boot.actuate.autoconfigure.security.servlet.EndpointRequest;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter
{

    @Override
    protected void configure(HttpSecurity http) throws Exception
    {

        http.authorizeRequests()
            .antMatchers("/")
            .permitAll();

        http.sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
            .maximumSessions(1)
            .maxSessionsPreventsLogin(true)
            .expiredUrl("/expired");

        http.authorizeRequests()
            .antMatchers("/shop")
            .hasRole("USER")
            .and()
            .formLogin()
            .loginPage("/login")
            .loginProcessingUrl("/login")
            .and()
            .httpBasic();

        http.authorizeRequests()
            .antMatchers("/admin")
            .hasRole("ADMIN")
            .and()
            .authorizeRequests()
            .requestMatchers(EndpointRequest.toAnyEndpoint())
            .hasRole("ENDPOINT_ADMIN")
            .and()
            .httpBasic();
    }
}
