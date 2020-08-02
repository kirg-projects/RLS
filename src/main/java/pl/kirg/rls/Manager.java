package pl.kirg.rls;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.*;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "manager")
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PRIVATE, force = true)
public class Manager {

    @Id
    @Column(unique = true, nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idManager;
    @OneToOne()
    private User user;
}
