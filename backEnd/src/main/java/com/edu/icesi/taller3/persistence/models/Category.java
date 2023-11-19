package com.edu.icesi.taller3.persistence.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "CATEGORY_PRODUCTS", schema = "public")
@Entity
public class Category {
    @Id
    @Column(name = "Code")
    private String code;
    @Column(name = "Description")
    private String description;
}
