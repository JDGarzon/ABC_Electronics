package com.edu.icesi.taller3.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edu.icesi.taller3.persistence.models.Category;
import com.edu.icesi.taller3.persistence.models.Product;
import com.edu.icesi.taller3.persistence.repositories.CategoryRepository;
import com.edu.icesi.taller3.persistence.repositories.ProductRepository;
import com.edu.icesi.taller3.services.IProductsService;

@Service
public class ProductServiceImpl implements IProductsService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private CategoryRepository categoryRepository;

    public ProductServiceImpl(ProductRepository productRepository, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<Product> getAll() {
        return productRepository.findAll();
    }

    @Override
    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Optional<Product> updateProduct(Long id, Product updatedProduct) {
        Optional<Product> existingCategory = productRepository.findById(id);
        if (existingCategory.isPresent()) {
            updatedProduct.setProductId(existingCategory.get().getProductId());
            return Optional.of(productRepository.save(updatedProduct));
        }
        return Optional.empty();
    }

    @Override
    public Product deleteProduct(Long id) {
        Optional<Product> ProductToDelete = getProductById(id);
        if (ProductToDelete.isPresent()) {
            productRepository.deleteById(id);
            return ProductToDelete.get();
        }
        return null;
    }

    @Override
    public List<Category> getAllcategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Optional<Category> getCategoryById(String id) {
        return categoryRepository.findById(id);
    }

    @Override
    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public Optional<Category> updateCategory(String id, Category updatedCategory) {
        Optional<Category> existingCategory = categoryRepository.findById(id);
        if (existingCategory.isPresent()) {
            updatedCategory.setCode(existingCategory.get().getCode());
            return Optional.of(categoryRepository.save(updatedCategory));
        }
        return Optional.empty();
    }

    @Override
    public Category deleteCategory(String id) {
        Optional<Category> CategoryToDelete = getCategoryById(id);
        if (CategoryToDelete.isPresent()) {
            categoryRepository.deleteById(id);
            return CategoryToDelete.get();
        }
        return null;
    }

}
