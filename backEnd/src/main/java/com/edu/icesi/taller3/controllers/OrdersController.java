package com.edu.icesi.taller3.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edu.icesi.taller3.persistence.models.Order;
import com.edu.icesi.taller3.persistence.models.OrderDetail;
import com.edu.icesi.taller3.persistence.models.OrderDetailId;
import com.edu.icesi.taller3.services.IOrderService;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping
public class OrdersController {
    @Autowired
    public IOrderService orderService;

    @GetMapping("/orders")
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/orders/{id}")
    public Optional<Order> getOrderById(@PathVariable Long id) {
        return orderService.getOrderById(id);
    }

    @PostMapping("/orders")
    public Optional<Order> createOrder(@RequestBody Order order) {
        return orderService.createOrder(order);
    }

    @PutMapping("/orders/{id}")
    public Optional<Order> updateOrder(@PathVariable Long id, @RequestBody Order updatedOrder) {
        return orderService.updateOrder(id, updatedOrder);
    }

    @DeleteMapping("/orders/{id}")
    public Order deleteOrder(@PathVariable Long id) {
        return orderService.deleteOrder(id);
    }

    @GetMapping("/orderDetails")
    public List<OrderDetail> getAllOrderDetails() {
        return orderService.getAllOrderDetails();
    }

    @GetMapping("/orderDetails/{prodId}/{orderNumber}")
    public Optional<OrderDetail> getOrderDetailById(@PathVariable("prodId") int prodId,
            @PathVariable("orderNumber") int orderNumber) {
        OrderDetailId id = new OrderDetailId(prodId, orderNumber);
        return orderService.getOrderDetailById(id);
    }

    @PostMapping("/orderDetails")
    public Optional<OrderDetail> createOrderDetail(@RequestBody OrderDetail order) {

        return orderService.createOrderDetail(order);
    }

    @PutMapping("/orderDetails/{prodId}/{orderNumber}")
    public Optional<OrderDetail> updateOrderDetail(@PathVariable("prodId") int prodId,
            @PathVariable("orderNumber") int orderNumber, @RequestBody OrderDetail updatedOrder) {
        OrderDetailId id = new OrderDetailId(prodId, orderNumber);
        return orderService.updateOrderDetail(id, updatedOrder);
    }

    @DeleteMapping("/orderDetails/{prodId}/{orderNumber}")
    public OrderDetail deleteOrderDetail(@PathVariable("prodId") int prodId,
            @PathVariable("orderNumber") int orderNumber) {
        OrderDetailId id = new OrderDetailId(prodId, orderNumber);
        return orderService.deleteOrderDetail(id);
    }

}
