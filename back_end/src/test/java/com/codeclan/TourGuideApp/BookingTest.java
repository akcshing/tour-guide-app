package com.codeclan.TourGuideApp;

import com.codeclan.TourGuideApp.models.Attraction;
import com.codeclan.TourGuideApp.models.Booking;
import com.codeclan.TourGuideApp.models.DayType;
import com.codeclan.TourGuideApp.models.TimeOfDayType;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class BookingTest {

    private Booking booking;
    private Attraction attraction;

    @Before
    public void before(){
        attraction = new Attraction("Edinburgh Castle","Castlehill","Historic fortress",1.00,10.00,"pichere","historic");
        booking = new Booking(TimeOfDayType.AFTERNOON,attraction, DayType.MONDAY);
    }

    @Test
    public void canGetTimeOfDay(){
        assertEquals(TimeOfDayType.AFTERNOON, booking.getTimeOfDay());
    }
}
