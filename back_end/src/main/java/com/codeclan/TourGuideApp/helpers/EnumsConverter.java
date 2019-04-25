package com.codeclan.TourGuideApp.helpers;
import com.codeclan.TourGuideApp.enums.AccessibilityType;
import com.codeclan.TourGuideApp.enums.DayType;
import com.codeclan.TourGuideApp.enums.TimeOfDayType;

public abstract class EnumsConverter {

    public TimeOfDayType setToEnum(String timeOfDay){
        TimeOfDayType newTimeOfDay = null;
        switch (timeOfDay.toLowerCase()){
            case "morning":
              newTimeOfDay = TimeOfDayType.MORNING;
              break;

            case "afternoon":
              newTimeOfDay = TimeOfDayType.AFTERNOON;
              break;

            case "evening":
              newTimeOfDay = TimeOfDayType.EVENING;
              break;
        }
        return newTimeOfDay;

    }

    public DayType setDayToEnum(String day){
        DayType newDay = null;
        switch (day.toLowerCase()){
            case "monday":
                newDay = DayType.MONDAY;
                break;

            case "tuesday":
                newDay = DayType.TUEDSDAY;
                break;

            case "wednesday":
                newDay = DayType.WEDNESDAY;
                break;

            case "thursday":
                newDay = DayType.THURSDAY;
                break;

            case "friday":
                newDay = DayType.FRIDAY;
                break;

            case "saturday":
                newDay = DayType.SATURDAY;
                break;

            case "sunday":
                newDay = DayType.SUNDAY;
                break;
        }
        return newDay;

    }

    public AccessibilityType setAccessibilityToEnum(String accessibility){
        AccessibilityType newAccessibility = null;
        switch (accessibility.toLowerCase()){
            case "wheelchairaccess":
                newAccessibility = AccessibilityType.WHEELCHAIRACCESS;
                break;

            case "dietaryrequirements":
                newAccessibility = AccessibilityType.DIETARYREQUIREMENTS;
                break;

            case "hearinginductionloop":
                newAccessibility = AccessibilityType.HEARINGINDUCTIONLOOP;
                break;

            case "dogfriendly":
                newAccessibility = AccessibilityType.DOGFRIENDLY;
                break;

            case "childfriendly":
                newAccessibility = AccessibilityType.CHILDFRIENDLY;
                break;
        }
        return newAccessibility;

    }
}
