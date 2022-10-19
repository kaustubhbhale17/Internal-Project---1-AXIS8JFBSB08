package com.example.apigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
@EnableEurekaClient
@Configuration
@EnableHystrix
public class ApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiGatewayApplication.class, args);
	}

	@Bean
	public RouteLocator configureRoutes(RouteLocatorBuilder builder) {
		//dynamic routing
		return builder.routes()
				.route(r->r.path("/admin/**").uri("lb://ADMIN-SERVICE"))
				.route(r->r.path("/job/**").uri("lb://JOB-SERVICE"))
				.route(r->r.path("/user/**").uri("lb://USER-SERVICE"))
				.build();
	}

}
