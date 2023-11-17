package com.edu.icesi.taller3.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edu.icesi.taller3.persistence.models.Category;
import com.edu.icesi.taller3.persistence.models.Product;
import com.edu.icesi.taller3.services.impl.ProductServiceImpl;

@RestController
@RequestMapping
public class ProductController {
    @Autowired
    public ProductServiceImpl productService;

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        System.out.println("_____________________________________");
        return productService.getAll();
    }

    @GetMapping("/products/{id}")
    public Product getProduct(@PathVariable Long id) {
        return productService.getProductById(id).get();
    }

    @PostMapping("/products")
    public Product createProduct(@RequestBody Product product) {
        return productService.createProduct(product);
    }

    @PutMapping("/products/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product updatedProduct) {
        return productService.updateProduct(id, updatedProduct).get();
    }

    @DeleteMapping("/products/{id}")
    public Product deleteProduct(@PathVariable Long id) {
        return productService.deleteProduct(id);
    }

    @GetMapping("/categories")
    public List<Category> getAllCategories() {
        return productService.getAllcategories();
    }

    @GetMapping("/categories/{id}")
    public Category getCategory(@PathVariable String id) {
        return productService.getCategoryById(id).get();
    }

    @PostMapping("/categories")
    public Category createCategory(@RequestBody Category category) {
        return productService.createCategory(category);
    }

    @PutMapping("/categories")
    public Category updateCategory(@PathVariable String id, @RequestBody Category updatedCategory) {
        return productService.updateCategory(id, updatedCategory).get();
    }

    @DeleteMapping("/categories/{id}")
    public Category deleteCategory(@PathVariable String id) {
        return productService.deleteCategory(id);
    }

}
