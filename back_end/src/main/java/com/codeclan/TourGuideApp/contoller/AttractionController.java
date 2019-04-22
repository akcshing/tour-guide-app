package com.codeclan.TourGuideApp.contoller;

import com.codeclan.TourGuideApp.repositories.AttractionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class AttractionController {

    @Autowired
    AttractionRepository attractionRepository;
}
