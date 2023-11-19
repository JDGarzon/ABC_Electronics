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

import com.edu.icesi.taller3.persistence.models.CustomerForm;
import com.edu.icesi.taller3.services.impl.CustomerFormService;

@RestController
@RequestMapping
public class CustomerFormController {
    @Autowired
    public CustomerFormService customerFormService;

    public CustomerFormController(CustomerFormService customerFormService) {
        this.customerFormService = customerFormService;
    }

    @GetMapping("/customerForm/{id}")
    public CustomerForm getCustomerFormById(@PathVariable String id) {
        return customerFormService.getCustomerFormById(id).get();
    }

    @PostMapping("/customerForm")
    public CustomerForm createCustomerForm(@RequestBody CustomerForm customerForm) {
        return customerFormService.createCustomerForm(customerForm);
    }

    @PutMapping("/customerForm/{id}")
    public CustomerForm updateCustomerForm(@PathVariable String id, @RequestBody CustomerForm updatedCustomerForm) {
        return customerFormService.updateCustomerForm(id, updatedCustomerForm).get();
    }

    @DeleteMapping("/customerForm/{id}")
    public CustomerForm deleteCustomerForm(@PathVariable String id) {
        return customerFormService.deleteCustomerForm(id);
    }

}
