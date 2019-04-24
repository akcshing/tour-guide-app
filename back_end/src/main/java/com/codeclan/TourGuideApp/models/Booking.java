package com.codeclan.TourGuideApp.models;

import com.codeclan.TourGuideApp.enums.DayType;
import com.codeclan.TourGuideApp.enums.TimeOfDayType;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Enumerated(EnumType.STRING)
    @Column
    private TimeOfDayType timeOfDay;

    @JsonIgnoreProperties("bookings")
    @ManyToOne
    @JoinColumn(name = "attraction_id")
    private Attraction attraction;

//    @ManyToMany()
//    @Column
//    private ArrayList<Customer> tourGroup;


    @JsonIgnoreProperties("bookings")
    @ManyToOne
    @JoinColumn(name="customer_id",nullable = false)
    private Customer customer;

    @Enumerated(EnumType.STRING)
    @Column
    private DayType day;



    public Booking(TimeOfDayType timeOfDay, Attraction attraction, Customer customer, DayType day){
        this.timeOfDay = timeOfDay;
        this.attraction = attraction;
        this.customer = customer;
//        this.tourGroup = new ArrayList<>();
        this.day = day;

    }

    public Booking(){
        
    }

    public Booking(TimeOfDayType morning){}

    public Long getId() {
        return Id;
    }

    public void setId(Long Id) {
        this.Id = Id;
    }

    public TimeOfDayType getTimeOfDay() {
        return timeOfDay;
    }

    public void setTimeOfDay(TimeOfDayType timeOfDay) {
        this.timeOfDay = timeOfDay;
    }

    public Attraction getAttraction() {
        return attraction;
    }

    public void setAttraction(Attraction attraction) {
        this.attraction = attraction;
    }


    public DayType getDay() {
        return day;
    }

    public void setDay(DayType day) {
        this.day = day;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}

//    public ArrayList<Customer> getTourGroup() {
//        return tourGroup;
//    }
//
//    public void setTourGroup(ArrayList<Customer> tourGroup) {
//        this.tourGroup = tourGroup;
//    }
//
//    public void addCustomer(Customer customer){
//        this.tourGroup.add(customer);
//    }
//        public int getGroupSize(){
//        return getTourGroup().size();
//    }
