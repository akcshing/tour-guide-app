import React from "react";
import Customer from "./Customer";

const BookingList = ({bookings}) => {
  if (!bookings) return null;
  console.log("hello", bookings);
  const mappedBookings = bookings.map((bookings, index) => {
    return <Booking key={index} booking={booking}/>
  })
  return (
    <div className = "booking-list">
    {mappedCustomers}
    </div>
  )
}

export default BookingList;
