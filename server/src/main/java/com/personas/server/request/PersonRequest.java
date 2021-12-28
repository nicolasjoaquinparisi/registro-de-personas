package com.personas.server.request;

public class PersonRequest {
    private String name;
    private String lastName;
    private Integer age;
    private Long jobId;

    public String getName() {
        return this.name;
    }

    public String getLastName() {
        return this.lastName;
    }

    public Integer getAge() {
        return this.age;
    }

    public Long getJobId() {
        return this.jobId;
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

    public void setJobId(Long jobId) {
        this.jobId = jobId;
    }
}
