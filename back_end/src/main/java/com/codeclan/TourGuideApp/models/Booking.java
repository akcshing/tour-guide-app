package com.codeclan.TourGuideApp.models;

import java.awt.print.Book;
import java.util.ArrayList;

public class Booking {

    private Long id;
    private TimeOfDay timeOfDay;
    private Attraction attraction;
    private ArrayList<Customer> tourGroup;
    private DayType day;

    public Booking(TimeOfDay timeOfDay, Attraction attraction, DayType day){
        this.timeOfDay = timeOfDay;
        this.attraction = attraction;
        this.tourGroup = new ArrayList<>();
        this.day = day;

    }

    public Booking(){}
}
