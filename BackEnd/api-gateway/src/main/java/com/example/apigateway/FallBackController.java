package com.example.apigateway;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FallBackController {

    @GetMapping("/adminServiceFallback")
    public String adminServiceFallback(){
        return "admin service is currently down";
    }

    @GetMapping("/jobServiceFallback")
    public String jobServiceFallback(){
        return "job service is currently down";
    }

    @GetMapping("/userServiceFallback")
    public String userServiceFallback(){
        return "user service is currently down";
    }
}
