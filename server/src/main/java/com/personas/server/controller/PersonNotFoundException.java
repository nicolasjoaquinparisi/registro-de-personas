package com.personas.server.controller;

class PersonNotFoundException extends RuntimeException {
    PersonNotFoundException(Long id) {
      super("Could not find person " + id);
    }
}