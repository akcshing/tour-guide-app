package com.codeclan.TourGuideApp.repositories.attractions;

import com.codeclan.TourGuideApp.enums.AccessibilityType;
import com.codeclan.TourGuideApp.models.Attraction;

import java.util.List;

public interface AttractionRepositoryCustom {

    List<Attraction> getAttractionByCategory(String category);
    List<Attraction> getAttractionByAccessibility(AccessibilityType accessibility);
}
