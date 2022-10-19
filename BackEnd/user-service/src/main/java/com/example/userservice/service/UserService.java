package com.example.userservice.service;

import com.example.userservice.entity.Admin;
import com.example.userservice.entity.Job;
import com.example.userservice.entity.Users;
import com.example.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RestTemplate restTemplate;

    public UserService(UserRepository userRepository, RestTemplate restTemplate) {
        this.userRepository = userRepository;
        this.restTemplate = restTemplate;
    }

    public Users saveUser(Users user) {
        List<Users> users = getAllUsers();
        for(Users u : users){
            if(u.getEmail().equals(user.getEmail())){
                System.out.println("Email is already taken");
                return null;
            }
        }
        return userRepository.save(user);
    }

    public List<Users> getAllUsers() {

        return userRepository.findAll();
    }

    public Users getUserByEmail(String email) {
        List<Users> users = getAllUsers();
        return users.stream().filter(user->user.getEmail().equals(email)).findAny().orElse(null);
    }

    public Users updateUserByEmail(String email, Users user) {
        Users _user = getUserByEmail(email);
        if(_user!=null){
            _user.setFirstName(user.getFirstName());
            _user.setLastName(user.getLastName());
            _user.setEmail(user.getEmail());
            _user.setPassword(user.getPassword());
            _user.setContactNumber(user.getContactNumber());
            _user.setWorkExperience(user.getWorkExperience());
            _user.setAppliedJobs(user.getAppliedJobs());

            userRepository.save(_user);
            return _user;
        }
        return null;
    }


    public List<Job> showAllJobs() {
        // uri->http://localhost:6001/job/
        List<Job> jobs = restTemplate.getForObject("http://JOB-SERVICE/job/",List.class);
        System.out.println("hello");
        return jobs;
    }

    public Users getUserById(String userId) {
        List<Users> users = getAllUsers();
        return users.stream().filter(user->user.getUserId().equals(userId)).findAny().orElse(null);
    }


    public Users applyForJob(Users user, String jobId) {
        Job job = restTemplate.getForObject("http://JOB-SERVICE/job/"+jobId,Job.class);

        System.out.println("Job is : "+job);

       List<Job> jobs = user.getAppliedJobs();
       jobs.add(job);
       user.setAppliedJobs(jobs);

        return user;
    }

    public Users validateUser(Users user) {
        List<Users> users = getAllUsers();
        for(Users u : users){
            if(u.getEmail().equals(user.getEmail())){
                if(u.getPassword().equals(user.getPassword())){
                    System.out.println("User found successfully");
                    return u;
                }else{
                    System.out.println("Invalid password ! Check your password! ");
                    return null;
                }
            }
        }
        System.out.println("No user found with given email!");
        return null;
    }


    public Job searchJob(String jobId) {
       Job job = restTemplate.getForObject("http://JOB-SERVICE/job/"+jobId,Job.class);
       if(job!=null){
           return job;
       }
       return null;
    }
}
