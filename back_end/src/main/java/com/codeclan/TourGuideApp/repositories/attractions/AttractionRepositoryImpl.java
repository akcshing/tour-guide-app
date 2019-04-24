package com.codeclan.TourGuideApp.repositories.attractions;

import com.codeclan.TourGuideApp.models.Attraction;
import com.codeclan.TourGuideApp.models.Booking;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class AttractionRepositoryImpl {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Attraction> getAttractionByType(String category){
        List<Attraction> attractions = null;
        Session session = entityManager.unwrap(Session.class);
        try{
            Criteria cr = session.createCriteria(Attraction.class);
            cr.add(Restrictions.eq("category", category));
            attractions = cr.list();

        }
        catch (HibernateException e){
            e.printStackTrace();
        }finally {
            session.close();
        }
        return attractions;
    }
}
