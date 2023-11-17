package com.edu.icesi.taller3.persistence.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.edu.icesi.taller3.services.IOrderService.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
