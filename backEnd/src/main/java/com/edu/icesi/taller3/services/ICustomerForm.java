package com.edu.icesi.taller3.services;

import java.util.Optional;

import com.edu.icesi.taller3.persistence.models.CustomerForm;

public interface ICustomerForm {

    Optional<CustomerForm> getCustomerFormById(String id);

    CustomerForm createCustomerForm(CustomerForm CustomerForm);

    Optional<CustomerForm> updateCustomerForm(String id, CustomerForm updatedCustomerForm);

    CustomerForm deleteCustomerForm(String id);

}
