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


}
