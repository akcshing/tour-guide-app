package com.codeclan.TourGuideApp.contoller;

import com.codeclan.TourGuideApp.enums.TimeOfDayType;
import com.codeclan.TourGuideApp.helpers.EnumsConverter;
import com.codeclan.TourGuideApp.models.Booking;
import com.codeclan.TourGuideApp.repositories.bookings.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/bookings")
public class BookingController extends EnumsConverter {

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping (value = "/sort/{timeOfDay}")
    public List<Booking> getBookingsByTimeOfDay(@PathVariable String timeOfDay){
       TimeOfDayType timeOfDayAsEnum = setToEnum(timeOfDay);
        return bookingRepository.getBookingsByTimeOfDay(timeOfDayAsEnum);
    }
}
