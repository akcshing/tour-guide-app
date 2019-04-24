package com.codeclan.TourGuideApp.repositories.bookings;
import com.codeclan.TourGuideApp.enums.DayType;
import com.codeclan.TourGuideApp.enums.TimeOfDayType;
import com.codeclan.TourGuideApp.models.Booking;
import java.util.List;

public interface BookingRepositoryCustom {

    List<Booking> getBookingsByTimeOfDay(TimeOfDayType timeOfDay);

    List<Booking> getBookingsByDay(DayType dayType);
}
