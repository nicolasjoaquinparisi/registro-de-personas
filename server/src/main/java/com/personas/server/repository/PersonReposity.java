package com.personas.server.repository;

import com.personas.server.entity.Person;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonReposity extends JpaRepository<Person, Long>{
    
}
