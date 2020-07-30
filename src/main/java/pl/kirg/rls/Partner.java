package pl.kirg.rls;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table( name = "User_type")
public class Partner
{

    @Id
    @Column(nullable = false, length = 50)
    @JoinColumn(name = "username")
    private String username;
    @Column(nullable = false)
    private boolean Is_Partner;



    @Column(nullable = false, length = 50)
    @OneToMany
    @JoinTable( name = "Partner_DB",
                joinColumns = @JoinColumn(name = "username" ),
                inverseJoinColumns = @JoinColumn(name = "partners"))
    private List<Users> partners;


    // GETTERS AND SETTERS
    public String getUsername()
    {
        return username;
    }

    private void setUsername(String username)
    {
        this.username = username;
    }

    private boolean isIs_Partner()
{
    return Is_Partner;
}

    private void setIs_Partner(boolean is_Partner)
    {
        Is_Partner = is_Partner;
    }

    private List<Users> getPartners()
    {
        return partners;
    }

    private void setPartners(List<Users> partners)
    {
        this.partners = partners;
    }
}
