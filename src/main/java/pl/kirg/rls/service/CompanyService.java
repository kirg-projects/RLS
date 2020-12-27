package pl.kirg.rls.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.kirg.rls.domain.Company;
import pl.kirg.rls.repository.CompanyRepository;

@Service
public class CompanyService
{
    @Autowired
    CompanyRepository companyRepository;

    public Company addCompany(Company company) {
        return null;
    }
    public boolean removeCompany(long companyId) {
        return false;
    }
}
