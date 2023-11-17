package com.edu.icesi.taller3.persistence.repositories;

import org.springframework.stereotype.Repository;

import com.edu.icesi.taller3.services.IProductsService.Product;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
