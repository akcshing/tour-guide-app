package com.codeclan.TourGuideApp.enums;

public enum TimeOfDayType {
    MORNING("morning"),
    AFTERNOON("afternoon"),
    EVENING("evening");

    private final String value;


    TimeOfDayType(String value){
        this.value = value;
    }

}
