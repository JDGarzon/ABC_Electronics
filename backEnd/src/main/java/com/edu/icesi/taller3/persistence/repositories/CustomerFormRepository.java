package com.edu.icesi.taller3.persistence.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.edu.icesi.taller3.persistence.models.CustomerForm;

@Repository
public interface CustomerFormRepository extends MongoRepository<CustomerForm, String> {

}
