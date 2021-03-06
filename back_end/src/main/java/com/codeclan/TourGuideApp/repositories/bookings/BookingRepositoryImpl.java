package com.codeclan.TourGuideApp.repositories.bookings;

import com.codeclan.TourGuideApp.enums.DayType;
import com.codeclan.TourGuideApp.enums.TimeOfDayType;
import com.codeclan.TourGuideApp.models.Booking;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class BookingRepositoryImpl implements BookingRepositoryCustom{

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Booking> getBookingsByTimeOfDay(TimeOfDayType timeOfDay){
        List<Booking> bookings = null;
        Session session = entityManager.unwrap(Session.class);
        try{
            Criteria cr = session.createCriteria(Booking.class);
            cr.add(Restrictions.eq("timeOfDay",timeOfDay));
            bookings = cr.list();
        }
        catch (HibernateException e){
            e.printStackTrace();
        }finally {
            session.close();
        }
        return bookings;
    }

    @Transactional
    public List<Booking> getBookingsByDay(DayType dayType){
        List<Booking> bookings = null;
        Session session = entityManager.unwrap(Session.class);
        try{
            Criteria cr = session.createCriteria(Booking.class);
            cr.add(Restrictions.eq("day",dayType));
            bookings = cr.list();
        }
        catch (HibernateException e){
            e.printStackTrace();
        }finally {
            session.close();
        }
        return bookings;
    }
}
