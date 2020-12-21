package pl.kirg.rls.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.kirg.rls.repository.ManagerRepository;

@Service
public class ManagerService
{
    @Autowired
    ManagerRepository managerRepository;

    // public Company addCompany(String companyName) {

    // }

    // public boolean removeCompany(int company) {

    // }

}
