package com.edu.icesi.taller3.persistence.models;

import jakarta.persistence.AttributeOverride;
import jakarta.persistence.AttributeOverrides;
import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Embeddable
@AttributeOverrides({
        @AttributeOverride(name = "orderNumber", column = @Column(name = "order_number")),
        @AttributeOverride(name = "productId", column = @Column(name = "Product_Id")),
})
public class OrderDetailId {
    private Long orderNumber;
    private Long productId;
}
