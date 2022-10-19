package com.example.userservice.controller;

import com.example.userservice.entity.Job;
import com.example.userservice.entity.Users;
import com.example.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/")
    public Users saveUser(@RequestBody Users user){
        return userService.saveUser(user);
    }

    @GetMapping("/")
    public List<Users> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Users getUserByEmail(@PathVariable("id") String email){
        return userService.getUserByEmail(email);
    }

    //update user by email
    @PutMapping("/{id}")
    public Users updateUser(@PathVariable("id") String email,@RequestBody Users user){
        return userService.updateUserByEmail(email,user);
    }

    @GetMapping("/userId/{id}")
    public Users getUserById(@PathVariable("id") String userId){
        return userService.getUserById(userId);
    }

    @PostMapping("/login")
    public Users validateUser(@RequestBody Users user){
        return userService.validateUser(user);
    }

    //displays all the available jobs on the screen
    @GetMapping("/showAllJobs")
    public List<Job> showAllJobs(){
        return userService.showAllJobs();
    }

    //when user applies for a specific job, it should get reflected in his applied jobs as well as
    //in the list of applicants of that particular admin
    @PostMapping("/applyForJob/{id}")
    public Users applyForJob(@RequestBody Users user,@PathVariable("id") String jobId){
        return userService.applyForJob(user,jobId);
    }

    @GetMapping("/searchJobs/{id}")
    public Job searchJob(@PathVariable("id") String jobId){
        return userService.searchJob(jobId);
    }

}
