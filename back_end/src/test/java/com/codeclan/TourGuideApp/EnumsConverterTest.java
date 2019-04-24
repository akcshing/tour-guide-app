package com.codeclan.TourGuideApp;

import com.codeclan.TourGuideApp.enums.TimeOfDayType;
import com.codeclan.TourGuideApp.helpers.EnumsConverter;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class EnumsConverterTest extends EnumsConverter {

    @Test
    public void canSetTimeOfDayToEnum(){
        String timeOfDay = "evening";
        assertEquals(TimeOfDayType.EVENING,setToEnum(timeOfDay));
        
    }
}
