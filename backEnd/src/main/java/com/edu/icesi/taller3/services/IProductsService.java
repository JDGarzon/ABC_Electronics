package com.edu.icesi.taller3.services;

import java.util.List;
import java.util.Optional;

import com.edu.icesi.taller3.persistence.models.Category;
import com.edu.icesi.taller3.persistence.models.Product;

public interface IProductsService {

    List<Product> getAll();

    Optional<Product> getProductById(Long id);

    Product createProduct(Product product);

    Optional<Product> updateProduct(Long id, Product updatedProduct);

    Product deleteProduct(Long id);

    List<Category> getAllcategories();

    Optional<Category> getCategoryById(String id);

    Category createCategory(Category category);

    Optional<Category> updateCategory(String id, Category updatedCategory);

    Category deleteCategory(String id);

}
