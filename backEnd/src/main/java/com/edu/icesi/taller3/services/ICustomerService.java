package com.edu.icesi.taller3.services;

import java.util.Optional;
import java.util.List;

import com.edu.icesi.taller3.persistence.models.Customer;

public interface ICustomerService {

    List<Customer> getAllCustomers();

    Optional<Customer> getCustomerById(String id);

    Optional<Customer> createCustomer(Customer customer);

    Optional<Customer> updateCustomer(String id, Customer updatedCustomer);

    Customer deleteCustomer(String id);

}
