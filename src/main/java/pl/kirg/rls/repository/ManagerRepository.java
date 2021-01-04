package pl.kirg.rls.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.kirg.rls.Manager;
import pl.kirg.rls.domain.Company;

@Repository
public interface ManagerRepository extends JpaRepository<Manager, Long>
{
    Manager addManager(Manager manager);
    boolean removeManager(long managerId);
}
