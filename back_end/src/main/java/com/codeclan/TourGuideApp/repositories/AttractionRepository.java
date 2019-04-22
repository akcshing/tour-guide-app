package com.codeclan.TourGuideApp.repositories;

import com.codeclan.TourGuideApp.models.Attraction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource()
public interface AttractionRepository extends JpaRepository<Attraction, Long> {
}
