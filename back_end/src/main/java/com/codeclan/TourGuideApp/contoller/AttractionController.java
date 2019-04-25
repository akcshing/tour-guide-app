package com.codeclan.TourGuideApp.contoller;

import com.codeclan.TourGuideApp.enums.AccessibilityType;
import com.codeclan.TourGuideApp.helpers.EnumsConverter;
import com.codeclan.TourGuideApp.models.Attraction;
import com.codeclan.TourGuideApp.repositories.attractions.AttractionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value ="/attractions")
public class AttractionController extends EnumsConverter {

    @Autowired
    AttractionRepository attractionRepository;

    @GetMapping (value = "/sort_by_category/{category}")
    public List<Attraction> getAttractionByCategory(@PathVariable String category){
        return attractionRepository.getAttractionByCategory(category);
    }

    @GetMapping (value = "/sort_by_accessibility/{accessibility}")
    public List<Attraction> getAttractionByAccessibility(@PathVariable String accessibility){
        AccessibilityType accessibilityAsEnum = setAccessibilityToEnum(accessibility);
        return attractionRepository.getAttractionByAccessibility(accessibilityAsEnum);
    }


}
