package com.codeclan.TourGuideApp.enums;

public enum AccessibilityType {
    WHEELCHAIRACCESS("wheelchairAccess"),
    DIETARYREQUIREMENTS("dietaryRequirements"),
    HEARINGINDUCTIONLOOP("hearingInductionLoop"),
    DOGFRIENDLY("dogFriendly"),
    CHILDFRIENDLY("childFriendly");

    private final String value;


    AccessibilityType(String value){
        this.value = value;
    }
}
