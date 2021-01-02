package pl.kirg.rls.domain;

import lombok.Data;

import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

@Data
@Entity
@Table
        (name = "authorities",
         uniqueConstraints =
         @UniqueConstraint(name = "UNQ_USERNAME_AUTHORITY", columnNames = {"username", "authority"})
        )
public class Authority implements GrantedAuthority
{

    public enum AuthName
    {USER, PARTNER, COMPANY, MANAGER, ADMIN, ENDPOINT_ADMIN}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Enumerated(EnumType.STRING)
    private AuthName authority;

    @OneToOne(optional = false)
    @JoinColumn(name = "username")
    private User user;

    @Override
    public String getAuthority()
    {
        return authority.toString();
    }

    @Override
    public String toString()
    {
        return "Authority{" +
               "id=" + id +
               ", authority=" + authority +
               ", username='" + user.getUsername() + '\'' +
               '}';
    }

}
