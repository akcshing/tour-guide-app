package com.codeclan.TourGuideApp.models;

import com.codeclan.TourGuideApp.enums.DayType;
import com.codeclan.TourGuideApp.enums.TimeOfDayType;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column
    private TimeOfDayType timeOfDay;

    @OneToOne
    @JoinColumn(name = "attraction_id")
    private Attraction attraction;

//    @ManyToMany()
//    @Column
//    private ArrayList<Customer> tourGroup;


    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(name = "bookings_customers", joinColumns = {@JoinColumn (name="booking_id", nullable = false, updatable = false)},
    inverseJoinColumns = {@JoinColumn(name = "customer_id", nullable = false, updatable = false)})
    private List<Customer> customers;

    @Enumerated(EnumType.STRING)
    @Column
    private DayType day;



    public Booking(TimeOfDayType timeOfDay, Attraction attraction, Customer customer, DayType day){
        this.timeOfDay = timeOfDay;
        this.attraction = attraction;
        this.customers = new ArrayList<>();
//        this.tourGroup = new ArrayList<>();
        this.day = day;

    }

    public Booking(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TimeOfDayType getTimeOfDay() {
        return timeOfDay;
    }

    public void setTimeOfDay(TimeOfDayType timeOfDay) {
        this.timeOfDay = timeOfDay;
    }

    public Attraction getAttraction() {
        return attraction;
    }

    public void setAttraction(Attraction attraction) {
        this.attraction = attraction;
    }


    public DayType getDay() {
        return day;
    }

    public void setDay(DayType day) {
        this.day = day;
    }

    public List<Customer> getCustomers() {
        return customers;
    }

    public void setCustomers(List<Customer> customers) {
        this.customers = customers;
    }
}

//    public ArrayList<Customer> getTourGroup() {
//        return tourGroup;
//    }
//
//    public void setTourGroup(ArrayList<Customer> tourGroup) {
//        this.tourGroup = tourGroup;
//    }
//
//    public void addCustomer(Customer customer){
//        this.tourGroup.add(customer);
//    }
//        public int getGroupSize(){
//        return getTourGroup().size();
//    }
