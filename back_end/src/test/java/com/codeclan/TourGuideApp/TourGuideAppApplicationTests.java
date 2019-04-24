package com.codeclan.TourGuideApp;

import com.codeclan.TourGuideApp.enums.DayType;
import com.codeclan.TourGuideApp.enums.TimeOfDayType;
import com.codeclan.TourGuideApp.models.Booking;
import com.codeclan.TourGuideApp.repositories.bookings.BookingRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.jws.Oneway;
import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TourGuideAppApplicationTests {

	@Autowired
	BookingRepository bookingRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void canGetBookingsByTimeOfDay(){
		List<Booking> bookings = bookingRepository.getBookingsByTimeOfDay(TimeOfDayType.MORNING);
		assertEquals(4,bookings.size());

	}

	@Test
	public void canGetBookingByDay(){
		List<Booking> bookings = bookingRepository.getBookingsByDay(DayType.MONDAY);
		assertEquals(4, bookings.size());
	}

}
