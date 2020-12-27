package pl.kirg.rls.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.kirg.rls.domain.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long>
{
    Company addCompany(Company company);
    boolean removeCompany(long companyId);
}
