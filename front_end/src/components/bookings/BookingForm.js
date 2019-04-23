import React from 'react';

const BookingForm = (props) => {

  if (!props.customers) return null;
  if (!props.attractions) return null;

  const allCustomers = props.customers.map((customer, index) => {
    return <option key={index} value={index}>{customer.name}</option>
  })
  const allAttractions = props.attractions.map((attraction, index) => {
    return <option key={index} value={index}>{attraction.name}</option>
  })

  function handleSubmit(event){
    event.preventDefault();
    console.log("event");




    const booking = {
      "day": event.target.day.value,
      "time": event.target.time.value,
      "customer": "http://localhost:8080/customers/" + event.target.customers.value,
      "attraction": "http://localhost:8080/attractions/" + event.target.attractions.value
    }
    props.handleBookingPost(booking)
    console.log("confirm booking",booking);
  }

  return(
    <div>
    <form onSubmit={handleSubmit}>

      <select name="customers">
      {allCustomers}
      </select>

      <select name="attractions">
      {allAttractions}
      </select>

      <div className="time">
        <div>
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
        </div>
      </div>

      <div className="day">
        <div>
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
        </div>
      </div>
      <button type="submit">submit</button>
    </form>
    </div>
  )
}

export default BookingForm;
