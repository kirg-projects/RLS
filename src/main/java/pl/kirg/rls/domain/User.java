package pl.kirg.rls.domain;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.sql.Timestamp;
import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Data
@Table(name = "users")
@NoArgsConstructor(access = AccessLevel.PUBLIC, force = true)
public class User implements UserDetails
{

    @Id
    @NotNull
    @Column
            (length = 50,
             unique = true,
             updatable = false
            )
    private String username;

    @NotNull
    @Column()
    private String password;

    @NotNull
    private Boolean enabled;

    @CreationTimestamp
    @DateTimeFormat
    @Column(updatable = false)
    private final Timestamp timestamp;

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
               ", enabled=" + enabled +
               ", timestamp=" + timestamp +
               ", customer_ID=" + customer.getId() +
               '}';
    }

}
