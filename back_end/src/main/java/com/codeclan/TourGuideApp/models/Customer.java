package com.codeclan.TourGuideApp.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "customers")
public class Customer {

    @Column(name = "name")
    private String name;

    @Column
    private String address;

    @Column
    private int age;

    @Column
    private String contactNumber;

    @Column
    private String email;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @OneToMany(mappedBy = "customer")
    private List<Booking> bookings;


    public Customer(String name, String address, int age, String contactNumber, String email){
        this.name = name;
        this.address = address;
        this.age = age;
        this.contactNumber = contactNumber;
        this.email = email;
        this.bookings = new ArrayList<>();
    }

    public Customer(){}

    public Long getId() {
        return Id;
    }

    public void setId(Long Id) {
        this.Id = Id;
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

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> booking) {
        this.bookings = booking;
    }


}
