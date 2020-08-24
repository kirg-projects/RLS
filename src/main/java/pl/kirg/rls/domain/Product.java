package pl.kirg.rls.domain;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.format.annotation.NumberFormat;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity(name = "products")
@NoArgsConstructor(access = AccessLevel.PUBLIC, force = true)
public class Product
{

    @Id
    @GeneratedValue
    private Long id;

    @Column(length = 150, nullable = false)
    private String name;

    @Column(name = "short_desc", length = 50, nullable = true)
    private String shortDescription;

    @Column(name = "full_desc", nullable = false)
    private String fullDescription;

    @Column(precision = 6, scale = 2, nullable = false)
    private BigDecimal qty;

    @Column(name = "availability_h", nullable = false)
    private Integer availabilityInHours;

    @NumberFormat
    @Column(precision = 6, scale = 2, nullable = false)
    private BigDecimal price;

    @Column(name = "discount_Pc", nullable = true)
    private Integer discountPercent;

}
