package pl.kirg.rls.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.kirg.rls.Manager;

@Repository
public interface ManagerRepository extends JpaRepository<Manager, Long>
{

    // Company addCompany(String companyName);
    // boolean removeCompany(int companyId);

}
