package com.codeclan.TourGuideApp.components;


import com.codeclan.TourGuideApp.enums.TimeOfDayType;
import com.codeclan.TourGuideApp.models.Attraction;
import com.codeclan.TourGuideApp.models.Booking;
import com.codeclan.TourGuideApp.models.Customer;
import com.codeclan.TourGuideApp.repositories.AttractionRepository;
import com.codeclan.TourGuideApp.repositories.BookingRepository;
import com.codeclan.TourGuideApp.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    AttractionRepository attractionRepository;

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    CustomerRepository customerRepository;

    public DataLoader(){

    }


    public void run(ApplicationArguments args) {

        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
        attractionRepository.save(castle);

//        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
//        attractionRepository.save(castle);
//
//        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
//        attractionRepository.save(castle);
//
//        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
//        attractionRepository.save(castle);
//
//        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
//        attractionRepository.save(castle);
//
//        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
//        attractionRepository.save(castle);
//
//        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
//        attractionRepository.save(castle);
//
//        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
//        attractionRepository.save(castle);
//
//        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
//        attractionRepository.save(castle);
//
//        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
//        attractionRepository.save(castle);
//
//        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
//        attractionRepository.save(castle);
//
//        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
//        attractionRepository.save(castle);
//
//        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
//        attractionRepository.save(castle);
//
//        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
//        attractionRepository.save(castle);
//
//        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
//        attractionRepository.save(castle);
//
//        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
//        attractionRepository.save(castle);
//
//        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
        attractionRepository.save(castle);

        Customer john = new Customer("John Smith","Glasgow",23,"0890712673", "JJ@gmail.com");
        customerRepository.save(john);

    }
}
