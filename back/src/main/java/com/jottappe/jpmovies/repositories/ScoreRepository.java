package com.jottappe.jpmovies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jottappe.jpmovies.entities.Score;
import com.jottappe.jpmovies.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
