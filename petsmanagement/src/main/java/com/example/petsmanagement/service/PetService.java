package com.example.petsmanagement.service;

import com.example.petsmanagement.domain.Pet;
import com.example.petsmanagement.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PetService {

    private final PetRepository petRepository;

    @Autowired
    public PetService(PetRepository petRepository) {
        this.petRepository = petRepository;
    }

    public List<Pet> getPets(Long id){
        return petRepository.findAll();
    }

    public Pet add(Pet pet){
        return petRepository.save(pet);
    }

    public Pet update(Pet pet){
        return petRepository.save(pet);
    }

    public Optional<Pet> getPetById(Long id){
        return petRepository.findById(id);
    }

    public void delete(Long id){
        petRepository.deleteById(id);
    }
}
