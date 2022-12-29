package com.example.petsmanagement.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "pet_user")
public class User {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String password;
}
