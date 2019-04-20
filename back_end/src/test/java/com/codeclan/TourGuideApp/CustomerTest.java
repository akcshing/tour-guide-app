package com.codeclan.TourGuideApp;

import com.codeclan.TourGuideApp.models.Customer;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CustomerTest {

    private Customer customer;

    @Before
    public void before(){
        customer = new Customer("dave","1 house",25,"1234","email.com");
    }

    @Test
    public void canGetName(){
        assertEquals("dave",customer.getName());
    }

    @Test
    public void canSetName(){
        customer.setName("Jade");
        assertEquals("Jade",customer.getName());
    }


}
