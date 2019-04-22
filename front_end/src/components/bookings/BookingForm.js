import React from 'react',

const BookingForm = (props) => {

  const options = props.bookings.map((bookings, index) => {
    return<option value = {index} key={index}>{booking.name}</option>
  })

  return (
    <select id ="booking-selector" defaultValue="default">
    <option disabled value="default">Choose a Booking</option>
    {options}
    </select>

  )

}

export default BookingForm
