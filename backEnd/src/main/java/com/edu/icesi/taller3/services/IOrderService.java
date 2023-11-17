package com.edu.icesi.taller3.services;

import java.util.List;
import java.util.Optional;

import com.edu.icesi.taller3.persistence.models.Order;
import com.edu.icesi.taller3.persistence.models.OrderDetail;
import com.edu.icesi.taller3.persistence.models.OrderDetailId;

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
}
