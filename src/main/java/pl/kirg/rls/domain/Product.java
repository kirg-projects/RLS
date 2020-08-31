package pl.kirg.rls.domain;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.NumberFormat;

import java.math.BigDecimal;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Data
@Entity(name = "products")
@NoArgsConstructor(access = AccessLevel.PUBLIC, force = true)
public class Product
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(length = 150)
    private String name;

    @Column(name = "short_desc", length = 50, nullable = true)
    private String shortDescription;

    @NotNull
    @Column(name = "full_desc")
    private String fullDescription;

    @NotNull
    @Column()
    private Integer qty;

    @NotNull
    @Column(name = "availability_h")
    private Integer availabilityInHours;

    @NotNull
    @NumberFormat
    @Column(precision = 6, scale = 2)
    private BigDecimal price;

    @Column(name = "discount_Pc", nullable = true)
    private Integer discountPercent;

    @DateTimeFormat
    @CreationTimestamp
    @Column(updatable = false)
    private final Timestamp timestamp;

    @Override
    public String toString()
    {
        return "Product{" +
               "id=" + id +
               ", name='" + name + '\'' +
               ", shortDescription='" + shortDescription + '\'' +
               ", fullDescription='" + fullDescription + '\'' +
               ", qty=" + qty +
               ", availabilityInHours=" + availabilityInHours +
               ", price=" + price +
               ", discountPercent=" + discountPercent +
               ", timestamp=" + timestamp +
               '}';
    }
}
