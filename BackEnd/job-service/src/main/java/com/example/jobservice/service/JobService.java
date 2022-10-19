package com.example.jobservice.service;

import com.example.jobservice.entity.Job;
import com.example.jobservice.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class JobService {
    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private RestTemplate restTemplate;
    public JobService(JobRepository jobRepository, RestTemplate restTemplate) {
        this.jobRepository = jobRepository;
        this.restTemplate = restTemplate;
    }


    public Job saveJob(Job job) {
        return jobRepository.save(job);
    }

    public List<Job> getAllJobs(){
        return jobRepository.findAll();
    }

    public Job getJobById(String jobId){
        List<Job> jobs = jobRepository.findAll();
        for(Job job : jobs){
            if(job.getJobId().equals(jobId)){
                return job;
            }
        }
        return null;
    }

    public Job updateJob(String jobId, Job job) {
        Job _job = getJobById(jobId);
        if(_job!=null){
            _job.setJobId(job.getJobId());
            _job.setJobTitle(job.getJobTitle());
            _job.setCompensation(job.getCompensation());
            _job.setEligibility(job.getEligibility());
            _job.setJobDescription(job.getJobDescription());

            jobRepository.save(_job);
            return _job;
        }
        return null;
    }

    public ResponseEntity<HttpStatus> deleteJob(String jobId) {
        Job _job = getJobById(jobId);

        if(_job!=null){
            jobRepository.delete(_job);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    public List<Job> getJobsWithAdmin(String adminId) {
        List<Job> jobs =jobRepository.findAll();
        return jobs.stream().filter(job -> job.getAdminId().equals(adminId)).collect(Collectors.toList());
    }

    public Job getJobByNumber(String jobNumber) {
        List<Job> jobs = jobRepository.findAll();
        return jobs.stream().filter(job->job.getJobNumber().equals(jobNumber)).findAny().orElse(null);
    }

    public void deleteJobCompensation() {
        List<Job> jobs = jobRepository.findAll();
        for(Job j : jobs){
            if(j.getCompensation()==0){
                jobRepository.delete(j);
            }
        }

    }

    public List<Job> searchForJobs(String jobId) {
        List<Job> jobs = getAllJobs();
        List<Job> results = new ArrayList<>();

        for(Job job : jobs){
            if(job.getJobId().equalsIgnoreCase(jobId))
                results.add(job);
        }
        return results;
    }
}
