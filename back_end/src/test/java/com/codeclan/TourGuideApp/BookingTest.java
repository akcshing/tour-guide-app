package com.codeclan.TourGuideApp;

import com.codeclan.TourGuideApp.enums.DayType;
import com.codeclan.TourGuideApp.enums.TimeOfDayType;
import com.codeclan.TourGuideApp.models.*;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class BookingTest {

    private Booking booking;
    private Attraction attraction;
    private Customer customer1;
    private Customer customer2;

    @Before
    public void before(){
        attraction = new Attraction("Edinburgh Castle","Castlehill","Historic fortress",10.00,"pichere","historic");
        customer1 = new Customer("wayne","livingston",30,"555","waynegmail");
        customer2 = new Customer("tracy","bathgate",24,"884","tracyemail");
        booking = new Booking(TimeOfDayType.AFTERNOON,attraction, DayType.MONDAY);
    }

    @Test
    public void canGetTimeOfDay(){
        assertEquals(TimeOfDayType.AFTERNOON, booking.getTimeOfDay());
    }

    @Test
    public void canSetTimeOfDay(){
        booking.setTimeOfDay(TimeOfDayType.EVENING);
        assertEquals(TimeOfDayType.EVENING, booking.getTimeOfDay());
    }

    @Test
    public void canGetAttraction(){
        assertEquals(attraction,booking.getAttraction());
    }

    @Test
    public void canSetAttraction(){
        Attraction museum = new Attraction("History Museum","Dalry","History of Dalry",10.00,"pichere","historic");
        booking.setAttraction(museum);
        assertEquals(museum,booking.getAttraction());
    }

    @Test
    public void canGetTourGroup(){
        assertEquals(0,booking.getTourGroup().size());
    }

    @Test
    public void canAddCustomerToTourGroup(){
        booking.addCustomer(customer1);
        booking.addCustomer(customer2);
        assertEquals(2,booking.getGroupSize());
    }

    @Test
    public void canGetDay(){
        assertEquals(DayType.MONDAY,booking.getDay());
    }

    @Test
    public void canSetDay(){
        booking.setDay(DayType.FRIDAY);
        assertEquals(DayType.FRIDAY,booking.getDay());
    }
}
