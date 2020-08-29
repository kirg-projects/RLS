package pl.kirg.rls.domain;

import lombok.Data;

import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

@Data
@Entity(name = "authorities")
public class Authority implements GrantedAuthority
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(mappedBy = "authority", optional = false)
    @JoinColumn
    private User user;

    @NotNull
    private String role;

    @Override
    public String getAuthority()
    {
        return this.role;
    }

    @Override
    public String toString()
    {
        return "Authority{" +
               "id=" + id +
               ", role='" + role + '\'' +
               ", username='" + user.getUsername() + '\'' +
               '}';
    }

}
