package com.edu.icesi.taller3.persistence.models;

import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "user_account", schema = "public")
public class User {
    private String username;
    private String password;

}
