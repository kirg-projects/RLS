package pl.kirg.rls.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pl.kirg.rls.entity.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long>
{

}
