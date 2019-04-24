package com.codeclan.TourGuideApp.repositories.attractions;

import com.codeclan.TourGuideApp.models.Attraction;

import java.util.List;

public interface AttractionRepositoryCustom {

    List<Attraction> getAttractionByType(String type);

}
