package pl.kirg.rls.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pl.kirg.rls.domain.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long>
{

}
