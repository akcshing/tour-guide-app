package com.codeclan.TourGuideApp;

import com.codeclan.TourGuideApp.enums.AccessibilityType;
import com.codeclan.TourGuideApp.enums.TimeOfDayType;
import com.codeclan.TourGuideApp.models.Attraction;
import com.codeclan.TourGuideApp.repositories.attractions.AttractionRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static com.codeclan.TourGuideApp.enums.TimeOfDayType.MORNING;
import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AttractionTest {

    @Autowired
    private AttractionRepository attractionRepository;
    private Attraction attraction;

    @Before
    public void before(){
        attraction = new Attraction("Edinburgh Castle","Castlehill","Historic fortress",10.00,"pichere",AccessibilityType.CHILDFRIENDLY,"historic", MORNING);
    }

    @Test
    public void canGetName(){
        assertEquals("Edinburgh Castle",attraction.getName());

    }
    @Test
    public void canSetName(){
        attraction.setName("hello");
        assertEquals("hello",attraction.getName());
    }

    @Test
    public void canGetLocation(){
        assertEquals("Castlehill",attraction.getLocation());
    }

    @Test
    public void canSetLocation(){
        attraction.setLocation("gretna");
        assertEquals("gretna",attraction.getLocation());
    }

    @Test
    public void canGetDescription(){
        assertEquals("Historic fortress", attraction.getDescription());
    }

    @Test
    public void canSetDescription(){
        attraction.setDescription("rock pile");
        assertEquals("rock pile",attraction.getDescription());
    }

    @Test
    public void canGetFee(){
        assertEquals(10.00,attraction.getFee(),0.001);
    }

    @Test
    public void canSetFee(){
        attraction.setFee(150.50);
        assertEquals(150.50,attraction.getFee(),0.001);
    }

    @Test
    public void canGetPic(){
        assertEquals("pichere",attraction.getPic());
    }

    @Test
    public void canSetPic(){
        attraction.setPic("my.pic.here");
        assertEquals("my.pic.here",attraction.getPic());
    }

    @Test
    public void canGetAccessibility(){
        assertEquals(AccessibilityType.CHILDFRIENDLY, attraction.getAccessibility());
    }

    @Test
    public void canSetAccessibility(){
        attraction.setAccessibility(AccessibilityType.WHEELCHAIRACCES);
        assertEquals(AccessibilityType.WHEELCHAIRACCES,attraction.getAccessibility());
    }


    @Test
    public void canGetCategory(){
        assertEquals("historic",attraction.getCategory());
    }

    @Test
    public void canSetCategory(){
        attraction.setCategory("museum");
        assertEquals("museum",attraction.getCategory());
    }

    @Test
    public void canGetTimeOfDay(){
        assertEquals(TimeOfDayType.MORNING, attraction.getOpeningTime());
    }

    @Test
    public void canSetTimeOfDay(){
        attraction.setOpeningTime(TimeOfDayType.AFTERNOON);
        assertEquals(TimeOfDayType.AFTERNOON, attraction.getOpeningTime());
    }


    @Test
    public void canSaveAttraction(){
        attractionRepository.save(attraction);
    }


}
