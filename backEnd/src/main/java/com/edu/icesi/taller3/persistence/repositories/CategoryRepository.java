package com.edu.icesi.taller3.persistence.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.edu.icesi.taller3.persistence.models.Category;

public interface CategoryRepository extends JpaRepository<Category, String> {

}
