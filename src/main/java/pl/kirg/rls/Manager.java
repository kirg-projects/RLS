package pl.kirg.rls;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.*;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import lombok.Setter;
import pl.kirg.rls.domain.User;

@Entity
@Table(name = "manager")
@NoArgsConstructor(access = AccessLevel.PUBLIC, force = true)
@Getter
@Setter
public class Manager
{

    @Id
    @Column(unique = true, nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idManager;
    @OneToOne(cascade =
                      {CascadeType.DETACH,
                       CascadeType.MERGE,
                       CascadeType.PERSIST,
                       CascadeType.REFRESH})
    @JoinColumn(name = "user_id")
    private User user;

    // @OneToMany()
    // private List<Company> companies;

    @Override
    public String toString()
    {
        return "Manager{" +
               "idManager=" + idManager +
               ", user=" + user +
               '}';
    }
}
