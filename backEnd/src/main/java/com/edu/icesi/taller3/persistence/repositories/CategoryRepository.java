package com.edu.icesi.taller3.persistence.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.edu.icesi.taller3.services.IProductsService;

public interface CategoryRepository extends JpaRepository<IProductsService.Category, Long> {

}
