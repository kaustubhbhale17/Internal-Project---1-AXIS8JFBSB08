package com.example.jobservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Job {
    @Id
    private String jobNumber;
    private String jobId;
    private String jobTitle;
    private double compensation;
    private String eligibility;
    private String jobDescription;
    private String adminId;

}
