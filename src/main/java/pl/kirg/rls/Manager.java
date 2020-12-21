package pl.kirg.rls;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.*;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import pl.kirg.rls.domain.User;

@Entity
@Table(name = "manager")
@NoArgsConstructor(access = AccessLevel.PUBLIC, force = true)
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

    private long getIdManager()
    {
        return idManager;
    }

    private void setIdManager(long idManager)
    {
        this.idManager = idManager;
    }

    private User getUser()
    {
        return user;
    }

    private void setUser(User user)
    {
        this.user = user;
    }

    @Override
    public String toString()
    {
        return "Manager{" +
               "idManager=" + idManager +
               ", user=" + user +
               '}';
    }
}
