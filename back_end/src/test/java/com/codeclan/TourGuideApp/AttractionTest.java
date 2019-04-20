package com.codeclan.TourGuideApp;

import com.codeclan.TourGuideApp.models.Attraction;
import org.junit.Before;
import org.junit.Test;

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
}
