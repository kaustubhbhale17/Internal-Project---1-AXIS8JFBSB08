package com.example.admin.entity;

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
public class Admin {
    @Id
    private String adminNumber;
    private String adminId;
    private String adminName;
    private String adminEmail;
    private String password;
    private String adminContactNumber;
    private String adminCompanyName;

    private List<Job> jobList = new ArrayList<>();

}
