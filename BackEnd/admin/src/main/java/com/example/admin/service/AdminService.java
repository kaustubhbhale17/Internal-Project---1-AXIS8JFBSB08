package com.example.admin.service;

import com.example.admin.entity.Admin;
import com.example.admin.entity.Job;
import com.example.admin.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private RestTemplate restTemplate;

    public AdminService(AdminRepository adminRepository, RestTemplate restTemplate) {
        this.adminRepository = adminRepository;
        this.restTemplate = restTemplate;
    }

    //register as admin
    public Admin saveAdmin(Admin admin) {
        List<Admin> admins = getAllAdmins();
        for(Admin ad : admins){
            if(ad.getAdminEmail().equals(admin.getAdminEmail())){
                System.out.println("Email Already Exists! ");
                return null;
            }
        }

        return adminRepository.save(admin);
    }


    public List<Admin> getAllAdmins() {
        List<Admin> list = new ArrayList<>();
        List<Admin> admins = adminRepository.findAll();
        for(Admin admin : admins){
            List<Job> jobs = restTemplate.getForObject("http://JOB-SERVICE/job/adminId/"+admin.getAdminId(),List.class);
            admin.setJobList(jobs);
            list.add(admin);
        }
        return list;
    }


    public Admin getAdminById(String adminId) {
        List<Admin> admins = getAllAdmins();
        for (Admin admin : admins) {
            if (admin.getAdminId().equals(adminId)) {
                return admin;
            }
        }
        return null;
    }

    public Admin updateAdmin(Admin admin, String adminId) {
        Admin _admin = getAdminById(adminId);
        if (_admin != null) {
            //remove this field later
            _admin.setAdminId(admin.getAdminId());
            
            _admin.setAdminName(admin.getAdminName());
            _admin.setAdminEmail(admin.getAdminEmail());
            _admin.setPassword(admin.getPassword());
            _admin.setAdminContactNumber(admin.getAdminContactNumber());
            _admin.setAdminCompanyName(admin.getAdminCompanyName());

            adminRepository.save(_admin);
            return _admin;
        }
        return null;
    }


    public ResponseEntity<HttpStatus> deleteAdmin(String adminId) {
       Admin admin = getAdminById(adminId);
       if(admin!=null){
           adminRepository.delete(admin);
           return new ResponseEntity<>(HttpStatus.OK);
       }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    public Admin getJobsOfAdmin(String adminId) {
        Admin admin = getAdminById(adminId);
        List<Job> jobs = restTemplate.getForObject("http://JOB-SERVICE/job/adminId/"+adminId,List.class);
        admin.setJobList(jobs);
        return admin;
    }


    public List<Admin> getAdmins() {
        return adminRepository.findAll();
    }

    public Admin validateAdmin(Admin admin) {
        List<Admin> admins = getAllAdmins();
        for(Admin ad : admins){
            if(ad.getAdminEmail().equals(admin.getAdminEmail()) && ad.getPassword().equals(admin.getPassword())){
                System.out.println("Login Successfully");
                //System.out.println(ad);
                return ad;
            }
        }
        System.out.println("Please Register! No Email Found!! ");
        return null;
    }

    public List<String> listCompanies() {
        List<Admin> admins = getAdmins();
        List<String> companies = new ArrayList<>();
        for(Admin a : admins){
            companies.add(a.getAdminCompanyName());
        }

        return companies;
    }
}
