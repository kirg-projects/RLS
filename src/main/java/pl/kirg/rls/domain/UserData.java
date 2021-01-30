package pl.kirg.rls.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "user_data")
public class UserData
{
    @Id
    @NotNull
    @Column
            (name = "login",
             length = 50,
             updatable = false
            )


    @NotNull
    @Size(min = 2, max = 50)
    private String name;

    @NotNull
    @Size(min = 2, max = 50)
    private String surname;

    @NotNull
    private String bright_date;

    @NotNull
    @Size(min = 2, max = 50)
    private String email;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long  phone_number;

    @NotNull
    @Size(min = 2, max = 50)
    private String country;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long  postal_code;

    @NotNull
    @Size(min = 2, max = 50)
    private String city;

    @NotNull
    @Size(min = 5, max = 50)
    private String street;

    @NotNull
    @Size(min = 2, max = 50)
    private String apatament_numbr;

    @NotNull
    private String destription;

    public UserData()
    {
        super();
    }


    public String Name()
    {
        return this.name;
    }

    public String Surname()
    {
        return this.surname;
    }

    public String BrightDate()
    {
        return this.bright_date;
    }

    public String Email()
    {
        return this.email;
    }

    public Long PhoneNumber() { return this.phone_number; }

    public String Country()
    {
        return this.country;
    }

    public Long  PostalCode(){ return this.postal_code; }

    public String City()
    {
        return this.city;
    }

    public String Street()
    {
        return this.street;
    }

    public String ApatamentNumbr()
    {
        return this.apatament_numbr;
    }

    public String Destription()
    {
        return this.destription;
    }

}
