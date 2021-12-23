package com.personas.server.repository;

import com.personas.server.entity.Job;

import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long>{
    
}
