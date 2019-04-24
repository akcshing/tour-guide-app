package com.codeclan.TourGuideApp.helpers;

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
}
