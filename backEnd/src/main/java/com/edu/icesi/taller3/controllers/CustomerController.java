package com.edu.icesi.taller3.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edu.icesi.taller3.persistence.models.Customer;
import com.edu.icesi.taller3.persistence.models.CustomerMDB;
import com.edu.icesi.taller3.services.impl.CustomerMDBService;
import com.edu.icesi.taller3.services.impl.CustomerService;

import java.util.List;

@RestController
@RequestMapping
public class CustomerController {
    @Autowired
    public CustomerMDBService customerMDBService;
    @Autowired
    public CustomerService customerService;

    public CustomerController(CustomerMDBService customerMDBService, CustomerService customerService) {
        this.customerMDBService = customerMDBService;
        this.customerService = customerService;
    }

    @GetMapping("/customers")
    public List<Customer> getCustomers() {
        return customerService.getAllCustomers();
    }

    @GetMapping("/customers/{id}")
    public Customer getCustomerById(@PathVariable String id) {
        return customerService.getCustomerById(id).get();
    }

    @PostMapping("/customers")
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerService.createCustomer(customer).get();
    }

    @PutMapping("/customers/{id}")
    public Customer updateCustomer(@PathVariable String id, @RequestBody Customer customer) {
        return customerService.updateCustomer(id, customer).get();
    }

    @DeleteMapping("/customers/{id}")
    public Customer deleteCustomer(@PathVariable String id) {
        return customerService.deleteCustomer(id);
    }

    @GetMapping("/customers-mdb")
    public List<CustomerMDB> getCustomersMDB() {
        return customerMDBService.getAllCustomers();
    }

    @GetMapping("/customers-mdb/{id}")
    public CustomerMDB getCustomerMDBById(@PathVariable String id) {
        return customerMDBService.getCustomerById(id).get();
    }

    @PostMapping("/customers-mdb")
    public CustomerMDB createCustomerMDB(@RequestBody CustomerMDB customer) {
        return customerMDBService.createCustomer(customer).get();
    }

    @PutMapping("/customers-mdb/{id}")
    public CustomerMDB updateCustomerMDB(@PathVariable String id, @RequestBody CustomerMDB customer) {
        return customerMDBService.updateCustomer(id, customer).get();
    }

    @DeleteMapping("/customers-mdb")
    public CustomerMDB deleteCustomerMDB(String id) {
        return customerMDBService.deleteCustomer(id);
    }

}
