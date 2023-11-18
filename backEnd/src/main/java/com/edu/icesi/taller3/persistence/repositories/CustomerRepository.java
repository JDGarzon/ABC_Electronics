package com.edu.icesi.taller3.persistence.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edu.icesi.taller3.persistence.models.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String> {

}
