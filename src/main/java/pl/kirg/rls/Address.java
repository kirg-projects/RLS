package pl.kirg.rls;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.format.annotation.NumberFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Data
@Table(name = "CT_addresses")
@NoArgsConstructor(access = AccessLevel.PROTECTED, force = true)
public class Address
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    @Size(min = 2, max = 40)
    private String country;

    @NotNull
    @Size(min = 2, max = 60)
    private String street;

    @NotNull
    @Size(min = 1, max = 20)
    private String streetNumber;

    @NotNull
    @NumberFormat
    @Size(min = 4, max = 10)
    private String postCode;

    @Size(min = 2, max = 40)
    private String city;

    @ManyToOne(targetEntity = Customer.class)
    private Customer customer;

}
