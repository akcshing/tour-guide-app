import React from 'react';

const BookingForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const booking = {
      "day": props.booking.day,
      "time": props.booking.time,
      "customer": props.booking.customer,
      "attraction": props.booking.attraction
    }
    this.props.handleBookingPost(booking)
  }

  return(
  <div>
  <form onSubmit={handleSubmit}>
  <input type="text" placeholder="day" name="day"/>
  <input type="text" placeholder="time" name="time"/>
  <input type="text" placeholder="customer" name="customer"/>
  <input type="text" placeholder="attraction" name="attraction"/>
  </form>
  </div>
)
}

export default BookingForm;
