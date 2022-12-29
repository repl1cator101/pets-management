package com.example.petsmanagement.repository;

import com.example.petsmanagement.domain.Pet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PetRepository extends JpaRepository<Pet, Long> {
    List<Pet> getPetByPetUserId(Long userId);
}
