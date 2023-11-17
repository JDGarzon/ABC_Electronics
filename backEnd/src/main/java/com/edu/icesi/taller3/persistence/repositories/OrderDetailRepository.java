package com.edu.icesi.taller3.persistence.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.edu.icesi.taller3.services.IOrderService.OrderDetail;
import com.edu.icesi.taller3.services.IOrderService.OrderDetailId;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, OrderDetailId> {

}
