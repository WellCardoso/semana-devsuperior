package com.dvsuperior.dsmovie.repository;


import com.dvsuperior.dsmovie.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
}
