package com.dvsuperior.dsmovie.repository;

import com.dvsuperior.dsmovie.model.Score;
import com.dvsuperior.dsmovie.model.ScorePK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
}
