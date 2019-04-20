package com.codeclan.TourGuideApp.models;

import java.awt.print.Book;
import java.util.ArrayList;

public class Booking {

    private Long id;
    private TimeOfDayType timeOfDay;
    private Attraction attraction;
    private ArrayList<Customer> tourGroup;
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

    public DayType getDay() {
        return day;
    }

    public void setDay(DayType day) {
        this.day = day;
    }
}
