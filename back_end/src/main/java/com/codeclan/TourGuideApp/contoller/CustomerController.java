package com.codeclan.TourGuideApp.contoller;

import com.codeclan.TourGuideApp.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@RepositoryRestController
@RestController
@RequestMapping(value = "/api/customers")
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

}
