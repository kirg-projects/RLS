package pl.kirg.rls;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "products")
@NoArgsConstructor(access = AccessLevel.PRIVATE, force = true)
@Getter
@Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long productId;
    private String name;
    private BigDecimal price;
    @ManyToMany(mappedBy = "products")
    private List<Order> orders;
}
