package pl.kirg.rls;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Data
@Entity(name = "CT_orders")
@NoArgsConstructor(access = AccessLevel.PROTECTED, force = true)
public class Order
{

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Customer customer;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinTable
            (
                    name = "CT_ORDERS_PRODUCTS",
                    inverseJoinColumns = @JoinColumn(name = "productID"),
                    joinColumns = {@JoinColumn(name = "orderID")},
                    foreignKey = @ForeignKey(name = "FK_CUSTOMER_ID")
            )
    private List<Product> product;

    @Column(name = "total", nullable = false, precision = 2)
    private BigDecimal grandTotal;

}
