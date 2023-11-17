package com.edu.icesi.taller3.persistence.models;

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
@Table(name = "order_detail", schema = "public")
@Entity
public class OrderDetail {
    @EmbeddedId
    private OrderDetailId id;
    private int quantity;
    private double price;

}
