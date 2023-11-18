package com.edu.icesi.taller3.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class OrderDetailDto {
    private int orderNumber;
    private int productId;
    private int quantity;
    private double price;
}
