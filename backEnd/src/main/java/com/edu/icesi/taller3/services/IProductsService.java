package com.edu.icesi.taller3.services;

import java.util.List;
import java.util.Optional;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

public interface IProductsService {

    List<Product> getAll();

    Optional<Product> getProductById(Long id);

    Product createProduct(Product product);

    Optional<Product> updateProduct(Long id, Product updatedProduct);

    Product deleteProduct(Long id);

    List<Category> getAllcategories();

    Optional<Category> getCategoryById(Long id);

    Category createCategory(Category category);

    Optional<Category> updateCategory(Long id, Category updatedCategory);

    Category deleteCategory(Long id);

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @EqualsAndHashCode
    @Table(name = "products", schema = "public")
    public class Product {
        private int productId;
        private String categoryCode;
        private String description;
        private int quantityAvailable;
        private double cost;
        private double sellingPrice;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @EqualsAndHashCode
    @Table(name = "category_products", schema = "public")
    public class Category {
        private String code;
        private String description;
    }
}
