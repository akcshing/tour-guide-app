package com.codeclan.TourGuideApp;

import com.codeclan.TourGuideApp.models.AccessibilityType;
import com.codeclan.TourGuideApp.models.Attraction;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;

import static org.junit.Assert.assertEquals;

public class AttractionTest {

    private Attraction attraction;

    @Before
    public void before(){
        attraction = new Attraction("Edinburgh Castle","Castlehill","Historic fortress",1.00,10.00,"pichere","historic");
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
    public void canGetDuration(){
        assertEquals(1.00,attraction.getDuration(),0.0001);
    }

    @Test
    public void canSetDuration(){
        attraction.setDuration(2.00);
        assertEquals(2.00,attraction.getDuration(),0.001);
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
        assertEquals(0, attraction.getAccessibility().size());
    }

    @Test
    public void canAddAccessibility(){
        attraction.addAccessibility(AccessibilityType.CHILDFRIENDLY);
        attraction.addAccessibility(AccessibilityType.DOGFRIENDLY);
        assertEquals(2,attraction.getAccessibility().size());
    }

    @Test
    public void canAddManyAccessibility(){
        ArrayList<AccessibilityType> access = new ArrayList<>();
        access.add(AccessibilityType.CHILDFRIENDLY);
        access.add(AccessibilityType.DOGFRIENDLY);
        attraction.addManyAccessibility(access);
        assertEquals(2,attraction.getAccessibility().size());

    }

    @Test
    public void canRemoveAccessibility(){
        attraction.addAccessibility(AccessibilityType.DIETARYREQUIREMENTS);
        attraction.addAccessibility(AccessibilityType.CHILDFRIENDLY);
        assertEquals(true,attraction.removeAccessibility(AccessibilityType.CHILDFRIENDLY));
    }

    @Test
    public void canGetCategory(){
        assertEquals("historic",attraction.getCategory());
    }


}
