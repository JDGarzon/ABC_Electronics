package com.edu.icesi.taller3.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edu.icesi.taller3.persistence.models.Customer;
import com.edu.icesi.taller3.persistence.repositories.CustomerRepository;
import com.edu.icesi.taller3.services.ICustomerService;

@Service
public class CustomerService implements ICustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Optional<Customer> getCustomerById(String id) {
        return customerRepository.findById(id);
    }

    @Override
    public Optional<Customer> createCustomer(Customer order) {
        return Optional.of(customerRepository.save(order));
    }

    @Override
    public Optional<Customer> updateCustomer(String id, Customer updatedOrder) {
        Optional<Customer> order = customerRepository.findById(id);
        if (order.isPresent()) {
            return Optional.of(customerRepository.save(updatedOrder));
        }
        return null;
    }

    @Override
    public Customer deleteCustomer(String id) {
        Optional<Customer> order = customerRepository.findById(id);
        if (order.isPresent()) {
            customerRepository.delete(order.get());
            return order.get();
        }
        return null;
    }

}
