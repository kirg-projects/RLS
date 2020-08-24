package pl.kirg.rls.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pl.kirg.rls.domain.User;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String>
{

    Optional<User> findByUsername(String username);

    Iterable<? extends User> findUserByCustomerLastNameAndEnabledIsTrue(String lastName);

    Optional<User> findUserByCustomerEmail(String email);

    Optional<User> findUserByCustomerPhoneNumber(String phoneNumber);
}
