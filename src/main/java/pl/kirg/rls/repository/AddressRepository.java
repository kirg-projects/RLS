package pl.kirg.rls.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pl.kirg.rls.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long>
{
}
