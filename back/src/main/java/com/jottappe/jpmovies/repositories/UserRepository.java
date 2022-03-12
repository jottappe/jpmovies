package com.jottappe.jpmovies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jottappe.jpmovies.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
}
