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

import com.personas.server.entity.Person;
import com.personas.server.repository.PersonReposity;

@RestController
@CrossOrigin
public class IndexController {
    
    @Autowired
    private PersonReposity personReposity;

    @GetMapping("/persons")
    List<Person> all() {
      return personReposity.findAll();
    }

    @GetMapping("/persons/{id}")
    Person one(@PathVariable Long id) {
      return personReposity.findById(id)
        .orElseThrow(() -> new PersonNotFoundException(id));
    }
    
    @PostMapping("/persons")
    Person newPerson(@RequestBody Person newPerson) {
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
