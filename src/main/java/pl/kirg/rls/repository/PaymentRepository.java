package pl.kirg.rls.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pl.kirg.rls.domain.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long>
{

}
