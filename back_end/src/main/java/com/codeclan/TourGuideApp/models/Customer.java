package com.codeclan.TourGuideApp.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "customers")
public class Customer {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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



    @JsonIgnoreProperties("bookings")
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable( joinColumns = {@JoinColumn (name = "customer_id", nullable = false, updatable = false)},
    inverseJoinColumns = {@JoinColumn (name = "booking_id", nullable = false, updatable = false)})
    private List<Booking> booking;




    public Customer(String name, String address, int age, String contactNumber, String email){
        this.name = name;
        this.address = address;
        this.age = age;
        this.contactNumber = contactNumber;
        this.email = email;
        this.booking = new ArrayList<>();
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

    public List<Booking> getBooking() {
        return booking;
    }

    public void setBooking(List<Booking> booking) {
        this.booking = booking;
    }


}
