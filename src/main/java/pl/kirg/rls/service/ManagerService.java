package pl.kirg.rls.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.kirg.rls.Manager;
import pl.kirg.rls.domain.Company;
import pl.kirg.rls.repository.ManagerRepository;

@Service
public class ManagerService
{
    @Autowired
    ManagerRepository managerRepository;

    public Manager addManager(Manager manager) {
        return null;
    }
    public boolean removeManager(long managerId) {
        return false;
    }

}
