package com.codeclan.TourGuideApp;

import com.codeclan.TourGuideApp.models.Customer;
import com.codeclan.TourGuideApp.repositories.CustomerRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CustomerTest {

    @Autowired
    CustomerRepository customerRepository;

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

    @Test
    public void canGetAddress(){
        assertEquals("1 house",customer.getAddress());
    }

    @Test
    public void canSetAddress(){
        customer.setAddress("2 house");
        assertEquals("2 house",customer.getAddress());
    }

    @Test
    public void canGetAge(){
        assertEquals(25,customer.getAge());
    }

    @Test
    public void canSetAge(){
        customer.setAge(30);
        assertEquals(30,customer.getAge());
    }

    @Test
    public void canGetContactNumber(){
        assertEquals("1234",customer.getContactNumber());
    }

    @Test
    public void canSetContactNumber(){
        customer.setContactNumber("4444");
        assertEquals("4444",customer.getContactNumber());
    }

    @Test
    public void canGetEmail(){
        assertEquals("email.com",customer.getEmail());
    }

    @Test
    public void canSetEmail(){
        customer.setEmail("newemail.com");
        assertEquals("newemail.com",customer.getEmail());
    }

    @Test
    public void canCreateCustomer(){
        Customer customer = new Customer("shirley","home",50,"666","email");
        customerRepository.save(customer);
    }



}
