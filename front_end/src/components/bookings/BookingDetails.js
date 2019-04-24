import React from 'react';


const BookingDetails = (props) => {

  if (!props.booking) return null;


  const onDelete = () => {
    props.handleDelete(props.booking.id);
    console.log("Help me", props.booking.id);
  }

  const onEdit = () => {
    props.handleEdit(props.booking.id)
  }
return (
  <div className = "booking-details">
  <button onClick = {onEdit}>Edit</button>
  <button onClick = {onDelete}>Delete</button>
  </div>
)
}

export default BookingDetails;
