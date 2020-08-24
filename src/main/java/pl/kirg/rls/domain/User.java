package pl.kirg.rls.domain;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Data
@Table(name = "users")
@NoArgsConstructor(access = AccessLevel.PUBLIC, force = true)
public class User implements UserDetails
{

    @Id
    @Column
            (length = 50,
             nullable = false,
             unique = true,
             updatable = false
            )
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private Boolean enabled;

    @OneToOne
            (fetch = FetchType.LAZY,
             cascade = CascadeType.ALL
            )
    private Customer customer;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities()
    {
        return List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public String getPassword()
    {
        return this.password;
    }

    @Override
    public String getUsername()
    {
        return this.username;
    }

    @Override
    public boolean isAccountNonExpired()
    {
        return true;
    }

    @Override
    public boolean isAccountNonLocked()
    {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired()
    {
        return true;
    }

    @Override
    public boolean isEnabled()
    {
        return true;
    }

    @Override
    public String toString()
    {
        return "User{" +
               "username='" + username + '\'' +
               ", password='" + password + '\'' +
               ", enabled=" + enabled +
               ", customer=" + customer.getId() +
               '}';
    }
}
