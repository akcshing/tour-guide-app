package com.codeclan.TourGuideApp.repositories.attractions;

import com.codeclan.TourGuideApp.models.Attraction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttractionRepository extends JpaRepository<Attraction, Long> {
}
