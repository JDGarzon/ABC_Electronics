package com.edu.icesi.taller3.persistence.models;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Table(name = "ORDER_DETAIL", schema = "public")
@Entity
public class OrderDetail {
    @EmbeddedId
    private OrderDetailId id;
    @Column(name = "Quantity")
    private int quantity;
    @Column(name = "Price")
    private double price;

}
