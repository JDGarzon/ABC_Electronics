package com.edu.icesi.taller3.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edu.icesi.taller3.persistence.models.CustomerMDB;
import com.edu.icesi.taller3.persistence.repositories.CustomerMDBRepository;
import com.edu.icesi.taller3.services.ICustomerMDBService;

@Service
public class CustomerMDBService implements ICustomerMDBService {

    @Autowired
    private CustomerMDBRepository customerRepository;

    @Override
    public List<CustomerMDB> getAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Optional<CustomerMDB> getCustomerById(String id) {
        return customerRepository.findById(id);
    }

    @Override
    public Optional<CustomerMDB> createCustomer(CustomerMDB customer) {
        return Optional.of(customerRepository.save(customer));
    }

    @Override
    public Optional<CustomerMDB> updateCustomer(String id, CustomerMDB updatedCustomer) {
        Optional<CustomerMDB> customer = customerRepository.findById(id);
        if (customer.isPresent()) {
            return Optional.of(customerRepository.save(updatedCustomer));
        }
        return null;
    }

    @Override
    public CustomerMDB deleteCustomer(String id) {
        Optional<CustomerMDB> order = customerRepository.findById(id);
        if (order.isPresent()) {
            customerRepository.delete(order.get());
            return order.get();
        }
        return null;
    }

}
