package com.example.jobservice.controller;

import com.example.jobservice.entity.Job;
import com.example.jobservice.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/job")
@CrossOrigin(origins = "*")
public class JobController {
    @Autowired
    private JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @PostMapping("/")
    public Job saveJob(@RequestBody Job job){
        return jobService.saveJob(job);
    }

    @GetMapping("/")
    public List<Job> getAllJobs(){
        return jobService.getAllJobs();
    }

    @GetMapping("/{id}")
    public Job getJobById(@PathVariable("id") String jobId){
        return jobService.getJobById(jobId);
    }

    @PutMapping("/{id}")
    public Job updateJob(@PathVariable("id") String jobId,@RequestBody Job job){
        return jobService.updateJob(jobId,job);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteJob(@PathVariable("id") String jobId){
        return jobService.deleteJob(jobId);
    }

    //group by adminId-> return jobs posted by a particular admin
    @GetMapping("/adminId/{id}")
    public List<Job> getJobsWithAdmin(@PathVariable("id") String adminId){
        return jobService.getJobsWithAdmin(adminId);
    }

    @GetMapping("/jobNumber/{id}")
    public Job getJobByNumber(@PathVariable("id") String jobNumber){
        return jobService.getJobByNumber(jobNumber);
    }


    @DeleteMapping("/compensation")
    public void deleteJobForCompensationZero( ){
        jobService.deleteJobCompensation();
    }

    @GetMapping("/searchForJobs/{id}")
    public List<Job> searchForJobs(@PathVariable("id") String jobId){
        return jobService.searchForJobs(jobId);
    }

}
