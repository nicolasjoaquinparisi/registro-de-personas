package com.personas.server.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.personas.server.request.PersonRequest;

@Entity
@Table(name="Person")
public class Person {
    
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name", nullable = false, length = 100)
    private String name;

    @Column(name="last_name", nullable = false, length = 50)
    private String lastName;

    @Column(name="age", nullable = false)
    private Integer age;

    @OneToOne
    @JoinColumn(name="job_id")
    private Job job;

    Person() {}

    Person(String name, String lastName, Integer age ) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    public Person(PersonRequest personRequest, Job job) {
        this.name = personRequest.getName();
        this.lastName = personRequest.getLastName();
        this.age = personRequest.getAge();

        if (job != null)
            this.job = job;
    }

    public Long getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public String getLastName() {
        return this.lastName;
    }

    public Integer getAge() {
        return this.age;
    }

    public Job getJob() {
        return this.job;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public void setJob(Job job) {
        this.job = job;
    }
}
