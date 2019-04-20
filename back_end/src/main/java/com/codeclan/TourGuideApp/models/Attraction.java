package com.codeclan.TourGuideApp.models;

import java.util.ArrayList;

public class Attraction {

    private Long id;
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
        this.accessibility = new ArrayList<>();
        this.category = category;
    }

    public Attraction(){}

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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getDuration() {
        return duration;
    }

    public void setDuration(double duration) {
        this.duration = duration;
    }

    public double getFee() {
        return fee;
    }

    public void setFee(double fee) {
        this.fee = fee;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    public ArrayList<AccessibilityType> getAccessibility() {
        return accessibility;
    }

    public void addMultipleAccessibility(ArrayList<AccessibilityType> accessibilityList) {
        this.accessibility = accessibilityList;
    }

    public void addAccessibility(AccessibilityType accessibility){
        this.accessibility.add(accessibility);
    }

    public boolean removeAccessibility(AccessibilityType accessibility){
        return this.accessibility.remove(accessibility);
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
