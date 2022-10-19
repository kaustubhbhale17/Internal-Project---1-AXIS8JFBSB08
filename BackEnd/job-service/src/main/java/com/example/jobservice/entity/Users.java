package com.example.jobservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Users {
    @Id
    private String userId;
    private String firstName;
    private String lastName;
    private String password;
    private String email;
    private String contactNumber;
    private String workExperience;

}
