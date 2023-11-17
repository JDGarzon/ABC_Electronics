package com.edu.icesi.taller3.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.edu.icesi.taller3.persistence.repositories.OrderDetailRepository;
import com.edu.icesi.taller3.persistence.repositories.OrderRepository;
import com.edu.icesi.taller3.services.IOrderService;

public class OrdersService implements IOrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OrderDetailRepository orderDetailRepository;

    public OrdersService(OrderRepository orderRepository, OrderDetailRepository orderDetailRepository) {
        this.orderRepository = orderRepository;
        this.orderDetailRepository = orderDetailRepository;
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }

    @Override
    public Optional<Order> createOrder(Order order) {
        return Optional.of(orderRepository.save(order));
    }

    @Override
    public Optional<Order> updateOrder(Long id, Order updatedOrder) {
        Optional<Order> existingOrder = orderRepository.findById(id);
        if (existingOrder.isPresent()) {
            updatedOrder.setCustomerId(existingOrder.get().getCustomerId());
            return Optional.of(orderRepository.save(updatedOrder));
        }
        return Optional.empty();
    }

    @Override
    public Order deleteOrder(Long id) {
        Optional<Order> OrderToDelete = getOrderById(id);
        if (OrderToDelete.isPresent()) {
            orderRepository.deleteById(id);
            return OrderToDelete.get();
        }
        return null;
    }

    @Override
    public List<OrderDetail> getAllOrderDetails() {
        return orderDetailRepository.findAll();
    }

    @Override
    public Optional<OrderDetail> getOrderDetailById(OrderDetailId id) {
        return orderDetailRepository.findById(id);
    }

    @Override
    public Optional<OrderDetail> createOrderDetail(OrderDetail order) {
        return Optional.of(orderDetailRepository.save(order));
    }

    @Override
    public Optional<OrderDetail> updateOrderDetail(OrderDetailId id, OrderDetail updatedOrder) {
        Optional<OrderDetail> existingOrder = orderDetailRepository.findById(id);
        if (existingOrder.isPresent()) {
            updatedOrder.setId(existingOrder.get().getId());
            return Optional.of(orderDetailRepository.save(updatedOrder));
        }
        return Optional.empty();
    }

    @Override
    public OrderDetail deleteOrderDetail(OrderDetailId id) {
        Optional<OrderDetail> OrderToDelete = getOrderDetailById(id);
        if (OrderToDelete.isPresent()) {
            orderDetailRepository.deleteById(id);
            return OrderToDelete.get();
        }
        return null;
    }

}
