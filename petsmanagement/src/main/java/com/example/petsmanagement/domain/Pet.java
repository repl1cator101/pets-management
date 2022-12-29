package com.example.petsmanagement.domain;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
public class Pet {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String code;
    private String color;
    @Column(name = "pet_type")
    private String petType;
    @Column(name = "pet_user_id")
    private Long petUserId;
}
