package com.codeclan.TourGuideApp.contoller;

import com.codeclan.TourGuideApp.repositories.attractions.AttractionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = )
public class AttractionController {

    @Autowired
    AttractionRepository attractionRepository;
}
