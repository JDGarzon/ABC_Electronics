package com.edu.icesi.taller3.persistence.models;

import java.util.Map;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@EqualsAndHashCode
@Document(collection = "columns")
public class CustomerForm {
    @Id
    private String id;

    private List<Map<String, Object>> columnas;
}
