import React from 'react';
import Radio from "../radio/Radio"
import {dayArr, timeOfDayArr} from "../../helpers/enums"

const BookingForm = (props) => {

  if (!props.customers) return null;
  if (!props.attractions) return null;

  const allCustomers = props.customers.map((customer, index) => {
    return <option key={index} value={index + 1}>{customer.name}</option>
  })
  const allAttractions = props.attractions.map((attraction, index) => {
    return <option key={index} value={index + 1}>{attraction.name}</option>
  })
  const timeRadios = timeOfDayArr.map((time, index) => {
    return <Radio key = {index} value={time} enum="timeOfDay" />
  })
  const dayRadios = dayArr.map((day, index) => {
    return <Radio key = {index} value={day} enum="day" />
  })

  function handleSubmit(event){
    event.preventDefault();

    const booking = {
      "day": event.target.day.value,
      "timeOfDay": event.target.timeOfDay.value,
      "customer": "http://localhost:8080/customers/" + event.target.customers.value,
      "attraction": "http://localhost:8080/attractions/" + event.target.attractions.value
    }
    props.handleBookingPost(booking)
  }

  return(
    <div id = "create-booking-container">
    <h3>Create Booking:</h3>
    <form onSubmit={handleSubmit}>
      <label>Select Customer: </label>
      <select name="customers">
      {allCustomers}
      </select>
      <br></br>
      <label>Select Attraction: </label>
      <select name="attractions">
      {allAttractions}
      </select>

      <section id ="radio-wrapper">
        <div className="time">
        <h3>Select Time of Day:</h3>
          {/* <div>
          <input type = "radio" id="morning" name="time" value="MORNING"/>
          <label for="morning">Morning</label>
          </div>

          <div>
          <input type = "radio" id="afternoon" name="time" value="AFTERNOON"/>
          <label for="afternoon">Afternoon</label>
          </div>

          <div>
          <input type = "radio" id="evening" name="time" value="EVENING"/>
          <label for="evening">Evening</label>
          </div> */}
          {timeRadios}
        </div>

        <div className="day">
        <h3>Select Day:</h3>
          {dayRadios}
          {/*<div>
          <input type = "radio" id="monday" name="day" value="MONDAY"/>
          <label for="monday">Monday</label>
          </div>

          <div>
          <input type = "radio" id="tuesday" name="day" value="TUESDAY"/>
          <label for="tuesday">Tuesday</label>
          </div>

          <div>
          <input type = "radio" id="wednesday" name="day" value="WEDNESDAY"/>
          <label for="wednesday">Wednesday</label>
          </div>

          <div>
          <input type = "radio" id="thursday" name="day" value="THURSDAY"/>
          <label for="thursday">Thursday</label>
          </div>

          <div>
          <input type = "radio" id="friday" name="day" value="FRIDAY"/>
          <label for="friday">Friday</label>
          </div>

          <div>
          <input type = "radio" id="saturday" name="day" value="SATURDAY"/>
          <label for="saturday">Saturday</label>
          </div>

          <div>
          <input type = "radio" id="sunday" name="day" value="SUNDAY"/>
          <label for="sunday">Sunday</label>
          </div> */}
        </div>
      </section>
      <button type="submit">submit</button>
    </form>
    </div>
  )
}

export default BookingForm;
