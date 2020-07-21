package pl.kirg.rls.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.autoconfigure.security.servlet.EndpointRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.sql.DataSource;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter
{

    @Autowired
    private DataSource dataSource;

    @Bean
    BCryptPasswordEncoder getPasswordEncoder()
    {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception
    {
        auth.jdbcAuthentication()
            .dataSource(dataSource)
            .usersByUsernameQuery("select username,password,enabled from users where username = ?")
            .authoritiesByUsernameQuery("select username,authority from authorities where username = ?")
            .withDefaultSchema();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception
    {

        http.authorizeRequests()
            .antMatchers("/**")
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
            .logout()
            .logoutUrl("/");

        http.authorizeRequests()
            .antMatchers("/manager")
            .hasRole("MANAGER")
            .and()
            .authorizeRequests()
            .antMatchers("/partner")
            .hasRole("PARTNER");

        http.authorizeRequests()
            .antMatchers("/admin")
            .hasRole("ADMIN")
            .and()
            .authorizeRequests()
            .requestMatchers(EndpointRequest.toAnyEndpoint())
            .hasRole("ENDPOINT_ADMIN");
    }
}
