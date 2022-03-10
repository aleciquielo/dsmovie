package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.Movies;

public interface MovieRepository extends JpaRepository <Movies, Long> {

}
