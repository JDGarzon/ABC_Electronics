package com.edu.icesi.taller3.persistence.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Table(name = "PRODUCTS", schema = "public")
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Product_Id")
    private Long productId;
    @Column(name = "category_code")
    private String categoryCode;
    @Column(name = "Description")
    private String description;
    @Column(name = "Quantity_Available")
    private int quantityAvailable;
    @Column(name = "Cost")
    private double cost;
    @Column(name = "Selling_Price")
    private double sellingPrice;
}
