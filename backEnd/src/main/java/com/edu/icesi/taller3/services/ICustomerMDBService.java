package com.edu.icesi.taller3.services;

import java.util.Optional;
import java.util.List;

import com.edu.icesi.taller3.persistence.models.CustomerMDB;

public interface ICustomerMDBService {
    List<CustomerMDB> getAllCustomers();

    Optional<CustomerMDB> getCustomerById(String id);

    Optional<CustomerMDB> createCustomer(CustomerMDB customer);

    Optional<CustomerMDB> updateCustomer(String id, CustomerMDB updatedCustomer);

    CustomerMDB deleteCustomer(String id);
}
