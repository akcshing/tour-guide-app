package com.codeclan.TourGuideApp;

import com.codeclan.TourGuideApp.enums.AccessibilityType;
import com.codeclan.TourGuideApp.enums.DayType;
import com.codeclan.TourGuideApp.enums.TimeOfDayType;
import com.codeclan.TourGuideApp.models.*;
import com.codeclan.TourGuideApp.repositories.AttractionRepository;
import com.codeclan.TourGuideApp.repositories.BookingRepository;
import com.codeclan.TourGuideApp.repositories.CustomerRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;

import static org.junit.Assert.assertEquals;

@SpringBootTest
@RunWith(SpringRunner.class)
public class BookingTest {

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    AttractionRepository attractionRepository;

    @Autowired
    CustomerRepository customerRepository;


    private Booking booking;
    private Attraction attraction;
    private Customer customer1;
    private Customer customer2;

    @Before
    public void before(){
        attraction = new Attraction("Edinburgh Castle","Castlehill","Historic fortress",10.00,"pichere", AccessibilityType.DIETARYREQUIREMENTS,"historic", TimeOfDayType.AFTERNOON);
        customer1 = new Customer("wayne","livingston",30,"555","waynegmail");
        customer2 = new Customer("tracy","bathgate",24,"884","tracyemail");
        booking = new Booking(TimeOfDayType.AFTERNOON,attraction, customer1,DayType.MONDAY);
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
        Attraction museum = new Attraction("History Museum","Dalry","History of Dalry",10.00,"pichere",AccessibilityType.DOGFRIENDLY,"historic",TimeOfDayType.MORNING);
        booking.setAttraction(museum);
        assertEquals(museum,booking.getAttraction());
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

    @Test
    public void canSaveBooking(){
        attractionRepository.save(attraction);
        customerRepository.save(customer2);
        Booking booking = new Booking(TimeOfDayType.AFTERNOON, attraction,customer2, DayType.FRIDAY);
        bookingRepository.save(booking);

    }

    //    @Test
//    public void canGetTourGroup(){
//        assertEquals(0,booking.getTourGroup().size());
//    }
//
//    @Test
//    public void canSetTourGroup(){
//        ArrayList<Customer> customers = new ArrayList<>();
//        customers.add(customer1);
//        customers.add(customer2);
//        booking.setTourGroup(customers);
//        assertEquals(2,booking.getGroupSize());
//    }
//
//    @Test
//    public void canAddCustomerToTourGroup(){
//        booking.addCustomer(customer1);
//        booking.addCustomer(customer2);
//        assertEquals(2,booking.getGroupSize());
//    }


}
