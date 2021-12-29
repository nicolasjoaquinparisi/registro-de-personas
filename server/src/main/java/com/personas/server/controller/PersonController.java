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
import com.personas.server.entity.Person;
import com.personas.server.repository.JobRepository;
import com.personas.server.repository.PersonRepository;
import com.personas.server.request.PersonRequest;
import com.personas.server.error.PersonNotFoundException;
import com.personas.server.entity.Job;

@RestController
@CrossOrigin
public class PersonController {
    
    @Autowired
    private PersonRepository personReposity;

    @Autowired
    private JobRepository jobRepository;

    @GetMapping("/persons")
    List<Person> all() {
      return personReposity.findAll();
    }

    @GetMapping("/persons/age/{age}")
    List<Person> findByAge(@PathVariable Integer age) {
      return personReposity.findByAge(age);
    }

    @GetMapping("/persons/{id}")
    Person one(@PathVariable Long id) {
      return personReposity.findById(id)
        .orElseThrow(() -> new PersonNotFoundException(id));
    }

    @PostMapping("/persons")
    Person newPerson(@RequestBody PersonRequest newPersonRequest) {

      Job job = null;

      if (newPersonRequest.getJobId() != null) {
        job = jobRepository.findById(newPersonRequest.getJobId()).get();
      }

      Person newPerson = new Person(newPersonRequest, job);
      return personReposity.save(newPerson);
    }

    @PutMapping("/persons/{id}")
    Person replacePerson(@RequestBody Person newPerson, @PathVariable Long id) {
      return personReposity.findById(id)
        .map(person -> {
          person.setName(newPerson.getName());
          person.setLastName(newPerson.getLastName());
          person.setAge(newPerson.getAge());
          return personReposity.save(person);
        })
        .orElseGet(() -> {
          newPerson.setId(id);
          return personReposity.save(newPerson);
        });
    }

    @DeleteMapping("/persons/{id}")
    void deletePerson(@PathVariable Long id) {
      personReposity.deleteById(id);
    }
}
