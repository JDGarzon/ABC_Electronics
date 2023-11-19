package com.edu.icesi.taller3.services.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edu.icesi.taller3.persistence.models.CustomerForm;
import com.edu.icesi.taller3.persistence.repositories.CustomerFormRepository;
import com.edu.icesi.taller3.services.ICustomerForm;

@Service
public class CustomerFormService implements ICustomerForm {
    @Autowired
    private CustomerFormRepository customerFormRepository;

    @Override
    public Optional<CustomerForm> getCustomerFormById(String id) {
        return customerFormRepository.findById(id);
    }

    @Override
    public CustomerForm createCustomerForm(CustomerForm CustomerForm) {
        customerFormRepository.save(CustomerForm);
        System.out.println("*******************************************************");
        System.out.println(getCustomerFormById(CustomerForm.getId()));
        System.out.println("*******************************************************");
        return customerFormRepository.save(CustomerForm);
    }

    @Override
    public Optional<CustomerForm> updateCustomerForm(String id, CustomerForm updatedCustomerForm) {
        CustomerForm customerForm = customerFormRepository.findById(id).orElse(null);
        if (customerForm != null) {
            Optional.of(customerFormRepository.save(customerForm));
        }
        return null;
    }

    @Override
    public CustomerForm deleteCustomerForm(String id) {
        CustomerForm customerForm = customerFormRepository.findById(id).orElse(null);
        if (customerForm != null) {
            customerFormRepository.delete(customerForm);
        }
        return customerForm;
    }

}
