package com.codeclan.TourGuideApp.models;

import com.codeclan.TourGuideApp.enums.DayType;
import com.codeclan.TourGuideApp.enums.TimeOfDayType;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private TimeOfDayType timeOfDay;

    @OneToOne
    @JoinColumn(name = "attraction_id")
    private Attraction attraction;

    @Column
    private ArrayList<Customer> tourGroup;

    @Column
    private DayType day;



    public Booking(TimeOfDayType timeOfDay, Attraction attraction, DayType day){
        this.timeOfDay = timeOfDay;
        this.attraction = attraction;
        this.tourGroup = new ArrayList<>();
        this.day = day;

    }

    public Booking(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public ArrayList<Customer> getTourGroup() {
        return tourGroup;
    }

    public void setTourGroup(ArrayList<Customer> tourGroup) {
        this.tourGroup = tourGroup;
    }

    public void addCustomer(Customer customer){
        this.tourGroup.add(customer);
    }

    public int getGroupSize(){
        return getTourGroup().size();
    }

    public DayType getDay() {
        return day;
    }

    public void setDay(DayType day) {
        this.day = day;
    }
}
