package com.personas.server.repository;

import java.util.List;

import com.personas.server.entity.Person;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PersonRepository extends JpaRepository<Person, Long> {
    
    // Opcional poner Select p
    @Query("FROM Person p WHERE p.age = :age")
    public List<Person> findByAge(@Param("age") Integer age);
    
}