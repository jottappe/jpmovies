package com.jottappe.jpmovies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jottappe.jpmovies.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
