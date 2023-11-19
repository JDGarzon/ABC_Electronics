package com.edu.icesi.taller3.persistence.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Table(name = "ORDERS", schema = "public")
@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_number")
    private Long orderNumber;
    @Column(name = "customer_Id")
    private Long customerId;
    @Column(name = "order_date")
    private LocalDate orderDate;
    @Column(name = "shipped_date")
    private LocalDate shippedDate;
    @Column(name = "payment_date")
    private LocalDate paymentDate;
}