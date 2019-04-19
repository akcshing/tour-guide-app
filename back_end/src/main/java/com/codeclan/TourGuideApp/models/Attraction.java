package com.codeclan.TourGuideApp.models;

import java.util.ArrayList;

public class Attraction {

    private String name;
    private String location;
    private String description;
    private double duration;
    private double fee;
    private String pic;
    private ArrayList<AccessibilityType> accessibility;
    private String category;

    public Attraction(String name, String location, String description, double duration, double fee, String pic, String category){
        this.name = name;
        this.location = location;
        this.description = description;
        this.duration = duration;
        this.fee = fee;
        this.pic = pic;
        this.accessibility = new ArrayList<AccessibilityType>();
        this.category = category;
    }

    public Attraction(){}
}
