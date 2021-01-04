package pl.kirg.rls.domain;

import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.util.List;

@Data
@Entity
@Table(name = "manager")
@NoArgsConstructor(access = AccessLevel.PUBLIC, force = true)
@Getter
@Setter
public class Manager
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @OneToOne(cascade = {
            CascadeType.DETACH,
            CascadeType.MERGE,
            CascadeType.PERSIST,
            CascadeType.REFRESH})
    @JoinColumn(name = "user_id")
    private User user;
    @OneToMany(mappedBy = "owner", fetch = FetchType.LAZY)
    private List<Company> companies;

    @Override
    public String toString()
    {
        return "Manager{" +
               "id=" + id +
               ", user=" + user +
               '}';
    }
}
