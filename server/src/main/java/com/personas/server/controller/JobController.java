package com.personas.server.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

import com.personas.server.entity.Job;
import com.personas.server.repository.JobRepository;
import com.personas.server.error.JobNotFoundException;

@RestController
@CrossOrigin
public class JobController {
    
    @Autowired
    private JobRepository jobRepository;

    @GetMapping("/jobs")
    List<Job> all() {
      return jobRepository.findAll();
    }

    @GetMapping("/jobs/{id}")
    Job one(@PathVariable Long id) {
      return jobRepository.findById(id)
        .orElseThrow(() -> new JobNotFoundException(id));
    }

    @PostMapping("/jobs")
    Job newJob(@RequestBody Job newJob) {
      return jobRepository.save(newJob);
    }

    @PutMapping("/jobs/{id}")
    Job replaceJob(@RequestBody Job newJob, @PathVariable Long id) {
      
      return jobRepository.findById(id)
        .map(job -> {
          job.setName(newJob.getName());
          job.setDescription(newJob.getDescription());
          return jobRepository.save(job);
        })
        .orElseGet(() -> {
          newJob.setId(id);
          return jobRepository.save(newJob);
        });
    }

    @DeleteMapping("/jobs/{id}")
    void deleteJob(@PathVariable Long id) {
      jobRepository.deleteById(id);
    }
}
