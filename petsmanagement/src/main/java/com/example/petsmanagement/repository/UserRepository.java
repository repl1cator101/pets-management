package com.example.petsmanagement.repository;

import com.example.petsmanagement.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    //@Query(value = "select u from pet_user u where u.name = ?1", nativeQuery = true)
    User findUserByName(String name);
}
