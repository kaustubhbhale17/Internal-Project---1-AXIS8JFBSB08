package com.example.admin.controller;

import com.example.admin.entity.Admin;
import com.example.admin.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class AdminController {
    @Autowired
    private final AdminService adminService;


    public AdminController(AdminService adminService) {
        this.adminService = adminService;

    }

    @PostMapping("/")
    public Admin saveAdmin(@RequestBody Admin admin){
        return adminService.saveAdmin(admin);
    }

    @GetMapping("/{id}")
    public Admin getAdminById(@PathVariable("id") String adminId){
        return adminService.getAdminById(adminId);
    }

    @PutMapping("/{id}")
    public Admin updateAdmin(@RequestBody Admin admin,@PathVariable("id") String adminId){
        return adminService.updateAdmin(admin,adminId);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteAdmin(@PathVariable("id") String adminId){
        return adminService.deleteAdmin(adminId);
    }

    @GetMapping("/")
    public List<Admin> getAllAdmins(){
        return adminService.getAllAdmins();
    }

    //group admins by id
    @GetMapping("/adminId/{id}")
    public Admin getJobsOfAdmin(@PathVariable("id") String adminId){
        return adminService.getJobsOfAdmin(adminId);
//        Admin admin = getAdminById(adminId);
//        List<Job> jobs =restTemplate.getForObject("http://localhost:5001/job/admin/"+admin.getAdminId(),List.class);
//        admin.setJobList(jobs);
//        return admin;
    }

    @GetMapping("/getOnlyAdmins")
    public List<Admin> getAdmins(){
        return adminService.getAdmins();
    }

    @PostMapping("/validateAdmin")
    public Admin validateAdmin(@RequestBody Admin admin){
        return adminService.validateAdmin(admin);
    }

    @GetMapping("/listCompanies")
    public List<String> getAllCompanies(){
        return adminService.listCompanies();
    }
}
