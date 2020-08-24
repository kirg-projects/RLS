package pl.kirg.rls.entity;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Data
@Entity(name = "CT_orders")
@NoArgsConstructor(access = AccessLevel.PUBLIC, force = true)
public class Order
{

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Customer customer;

    @Enumerated(EnumType.STRING)
    private Status orderStatus;

    @OneToMany(fetch = FetchType.LAZY)
    private List<Product> product;

    @Column(name = "message", nullable = true)
    private String customerMessage;

    @Column(name = "total", nullable = false, precision = 6, scale = 2)
    private BigDecimal grandTotal;

}
