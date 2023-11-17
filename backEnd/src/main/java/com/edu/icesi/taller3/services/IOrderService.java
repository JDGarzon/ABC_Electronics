package com.edu.icesi.taller3.services;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import com.edu.icesi.taller3.persistence.models.Book;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

public interface IOrderService {

    List<Order> getAllOrders();

    Optional<Order> getOrderById(Long id);

    Optional<Order> createOrder(Order order);

    Optional<Order> updateOrder(Long id, Order updatedOrder);

    Order deleteOrder(Long id);

    List<OrderDetail> getAllOrderDetails();

    Optional<OrderDetail> getOrderDetailById(OrderDetailId id);

    Optional<OrderDetail> createOrderDetail(OrderDetail order);

    Optional<OrderDetail> updateOrderDetail(OrderDetailId id, OrderDetail updatedOrder);

    OrderDetail deleteOrderDetail(OrderDetailId id);

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @EqualsAndHashCode
    @Table(name = "orders", schema = "public")
    public class Order {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long orderNumber;
        private int customerId;
        private LocalDate orderDate;
        private LocalDate shippedDate;
        private LocalDate paymentDate;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @EqualsAndHashCode
    @Table(name = "order_detail", schema = "public")
    public class OrderDetail {
        @EmbeddedId
        private OrderDetailId id;
        private int quantity;
        private double price;

    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @EqualsAndHashCode
    public class OrderDetailId {
        private int orderNumber;
        private int productId;
    }
}
