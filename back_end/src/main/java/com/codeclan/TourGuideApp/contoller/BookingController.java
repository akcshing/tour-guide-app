package com.codeclan.TourGuideApp.contoller;

import com.codeclan.TourGuideApp.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/booking")
public class BookingController {

    @Autowired
    BookingRepository bookingRepository;
}
