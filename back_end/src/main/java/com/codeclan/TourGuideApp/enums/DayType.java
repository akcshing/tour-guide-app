package com.codeclan.TourGuideApp.enums;

public enum DayType {
    MONDAY("monday"),
    TUEDSDAY("tuesday"),
    WEDNESDAY("wednesday"),
    THURSDAY("thursday"),
    FRIDAY("friday"),
    SATURDAY("saturday"),
    SUNDAY("sunday");

    private final String value;


    DayType(String value){
        this.value = value;
    }
}
