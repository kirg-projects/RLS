package pl.kirg.rls;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.NumberFormat;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@Entity
@Table(name = "CT_customers",
       uniqueConstraints = @UniqueConstraint
               (
                       name = "UNQ_FIRSTNAME_LASTNAME_PHONENUMBER_EMAIL",
                       columnNames =
                               {
                                       "first_name",
                                       "last_name",
                                       "phone_number",
                                       "email"
                               }
               )
)
@NoArgsConstructor(access = AccessLevel.PROTECTED, force = true)
public class Customer
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 2, max = 40)
    @Column(name = "first_name", updatable = false)
    private String firstName;

    @NotNull
    @Size(min = 2, max = 40)
    @Column(name = "last_name", updatable = false)
    private String lastName;

    @NotNull
    @DateTimeFormat
    @Column(name = "birth_date", updatable = false)
    private Date birthDate;

    @NotNull
    @NumberFormat
    @Column(name = "phone_number")
    private String phoneNumber;

    @NotNull
    @Email
    @Column(name = "email")
    private String email;

    @OneToOne(targetEntity = User.class)
    private User user;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Order> order;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Address> address;

}
