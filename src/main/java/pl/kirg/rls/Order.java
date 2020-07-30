package pl.kirg.rls;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "orders")
@NoArgsConstructor(access = AccessLevel.PRIVATE, force = true)
@Getter
@Setter
public class Order {

    @Id
    @Column(unique = true, nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToMany
    @JoinTable(
        name = "products_in_orders",
        joinColumns = {@JoinColumn(name = "order_id")},
        inverseJoinColumns = {@JoinColumn(name = "product_id")}
    )
    private List<Product> products;
   /*
    @OneToOne
    @JoinColumn(name = "purchaser_name")
    private User purchaser;
    */
}
