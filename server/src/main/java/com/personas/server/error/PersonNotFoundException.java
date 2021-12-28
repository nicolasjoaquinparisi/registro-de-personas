package com.personas.server.error;

public class PersonNotFoundException extends RuntimeException {
    public PersonNotFoundException(Long id) {
      super("Could not find person " + id);
    }
}