import React from "react";
import BookingContainer from "../../containers/bookings/BookingContainer";

const BookingList = ({bookings}) => {
  if (!bookings) return null;

  const mappedBookings = bookings.map((booking, index) => {
    return <BookingContainer key={index} booking={booking}/>
  })


  return (
    <div className = "booking-list">

    {mappedBookings}
    </div>
  )
}

export default BookingList;
