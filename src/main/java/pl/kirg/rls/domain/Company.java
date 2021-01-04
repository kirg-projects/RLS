package pl.kirg.rls.domain;

import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.sql.Timestamp;
import java.util.List;

@Data
@Entity
@Table(name = "company")
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PUBLIC, force = true)
public class Company
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "name")
    @Length(max = 50)
    private String name;
    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Product> products;
    @ManyToOne(cascade = {
            CascadeType.DETACH,
            CascadeType.MERGE,
            CascadeType.PERSIST,
            CascadeType.REFRESH})
    @JoinColumn(name = "owner")
    private Manager owner;
    @DateTimeFormat
    @CreationTimestamp
    @Column(name = "created", updatable = false)
    private Timestamp created;
    @Column(name = "nip")
    @Length(max = 10)
    private int nip;
    @Column(name = "country")
    @Length(max = 50)
    private String country;
    @Column(name = "postal_code")
    @Length(max = 20)
    private String postalCode;
    @Column(name = "City")
    @Length(max = 50)
    private String city;
    @Column(name = "street")
    @Length(max = 50)
    private String street;
    @Column(name = "contact_number")
    @Length(max = 9)
    private int contactNumber;

    @Override
    public String toString()
    {
        return "Company{" +
               "id=" + id +
               ", name='" + name + '\'' +
               ", products=" + products +
               ", owner=" + owner +
               ", created=" + created +
               ", nip=" + nip +
               ", country='" + country + '\'' +
               ", postalCode='" + postalCode + '\'' +
               ", city='" + city + '\'' +
               ", street='" + street + '\'' +
               ", contactNumber=" + contactNumber +
               '}';
    }
}
