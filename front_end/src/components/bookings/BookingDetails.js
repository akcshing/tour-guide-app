import React from 'react';
import {Link} from 'react-router-dom';

const BookingDetails = (props) => {

  if (!props.booking) return null;


  const onDelete = () => {
    props.handleDelete(props.booking.id);
  }

  const onEdit = () => {
    props.handleEdit(props.booking.id)
  }
return (
  <div className = "booking-details">
  <Link to = {"/bookings/edit/" + props.booking.id} className="name">
    Edit
  </Link>
  <button onClick = {onDelete}>Delete</button>
  </div>
)
}

export default BookingDetails;
