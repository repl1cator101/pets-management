package com.example.petsmanagement.api;

import com.example.petsmanagement.config.JwtUtil;
import com.example.petsmanagement.domain.Pet;
import com.example.petsmanagement.service.PetService;
import com.example.petsmanagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/pets")
@CrossOrigin(origins = "*", maxAge = 3600)
public class PetController {
    private final PetService petService;
    private final UserService userService;
    private final JwtUtil jwtUtil;

    @Autowired
    public PetController(PetService petService, UserService userService, JwtUtil jwtUtil) {
        this.petService = petService;
        this.userService = userService;
        this.jwtUtil = jwtUtil;
    }

    @GetMapping
    public List<Pet> getPets(@RequestHeader("Authorization") String bearerToken){
        return petService.getPets(getId(bearerToken));
    }

    @GetMapping("/{id}")
    public Optional<Pet> getPetById(@RequestHeader("Authorization") String bearerToken, @PathVariable("id") String id){
        long idL = Long.parseLong(id);
        return petService.getPetById(idL);
    }

    @PostMapping
    public Pet createPet(@RequestBody Pet pet, @RequestHeader("Authorization") String bearerToken){
        pet.setPetUserId(getId(bearerToken));
        return petService.add(pet);
    }

    @PutMapping
    public Pet updatePet(@RequestBody Pet pet, @RequestHeader("Authorization") String bearerToken){
        pet.setPetUserId(getId(bearerToken));
        return petService.update(pet);
    }

    private Long getId(String bearerToken) {
        String jwtToken = bearerToken.substring(7);
        String username = jwtUtil.extractUsername(jwtToken);
        return userService.loadUserByUsername(username).getId();
    }
}
