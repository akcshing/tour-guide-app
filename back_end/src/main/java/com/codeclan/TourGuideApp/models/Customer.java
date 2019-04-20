package com.codeclan.TourGuideApp.models;

public class Customer {

    private Long id;
    private String name;
    private String address;
    private int age;
    private String contacNumber;
    private String email;
    //TODO: add private Booking booking - we pass the object, not the id - add this when making table relationships

    public Customer(String name, String address, int age, String contacNumber, String email){
        this.name = name;
        this.address = address;
        this.age = age;
        this.contacNumber = contacNumber;
        this.email = email;
    }

    public Customer(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getContacNumber() {
        return contacNumber;
    }

    public void setContacNumber(String contacNumber) {
        this.contacNumber = contacNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
