package com.dvsuperior.dsmovie.repository;

import com.dvsuperior.dsmovie.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}
