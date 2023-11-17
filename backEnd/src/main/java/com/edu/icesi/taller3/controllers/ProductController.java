package com.edu.icesi.taller3.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.edu.icesi.taller3.services.IProductsService.Product;
import com.edu.icesi.taller3.services.IProductsService.Category;
import com.edu.icesi.taller3.services.impl.ProductServiceImpl;

@Controller("/products")
public class ProductController {
    @Autowired
    public ProductServiceImpl productService;

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAll();
    }

    @PostMapping
    public Product createProduct(Product product) {
        return productService.createProduct(product);
    }

    @PutMapping
    public Product updateProduct(Long id, Product updatedProduct) {
        return productService.updateProduct(id, updatedProduct).get();
    }

    @DeleteMapping
    public Product deleteProduct(Long id) {
        return productService.deleteProduct(id);
    }

    @GetMapping("/categories")
    public List<Category> getAllCategories() {
        return productService.getAllcategories();
    }

    @PostMapping("/categories")
    public Category createCategory(Category category) {
        return productService.createCategory(category);
    }

    @PutMapping("/categories")
    public Category updateCategory(Long id, Category updatedCategory) {
        return productService.updateCategory(id, updatedCategory).get();
    }

    @DeleteMapping("/categories")
    public Category deleteCategory(Long id) {
        return productService.deleteCategory(id);
    }

}
