import React, {Component} from 'react';
import Radio from "../radio/Radio"
import {dayArr, timeOfDayArr} from "../../helpers/enums"


class BookingEditForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      day: props.booking.day,
      timeOfDay: props.booking.timeOfDay,
      customer: props.booking.customer,
      attraction: props.booking.attraction
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    console.log(this.props);
  }

  handleSubmit(event){

    event.preventDefault();
    const booking = {
      "day": event.target.day.value,
      "timeOfDay": event.target.timeOfDay.value,
      "customer": this.state.customer,
      "attraction": this.state.attraction
    }
    this.props.handleBookingUpdate(booking)
  }


  render(){
    if (!this.props.allCustomers) return null;
    if (!this.props.allAttractions) return null;

    const allCustomers = this.props.allCustomers.map((customer, index) => {
      return <option key={index} value ={customer._links.self.href}>{customer.name}</option>
    })

    const allAttractions = this.props.allAttractions.map((attraction, index) => {
      return <option key={index} value ={attraction._links.self.href}>{attraction.name}</option>
    })

    const timeRadios = timeOfDayArr.map((time, index) => {
      return <Radio key = {index} value={time} enum="timeOfDay" />
    })

    const dayRadios = dayArr.map((day, index) => {
      return <Radio key = {index} value={day} enum="day" />
    })




    return(
      <div>
      <form onSubmit={this.handleSubmit}>

        <select name="customers" onChange={evt => this.setState({customer: evt.target.value})}>
        {allCustomers}
        </select>

        <select name="attractions" onChange={evt => this.setState({attraction: evt.target.value})}>
        {allAttractions}
        </select>

        <div className="timeOfDayRadio">
          {timeRadios}
        </div>

        <div className="day">
          {dayRadios}
        </div>
        <button type="submit">submit</button>
      </form>
      </div>
    )
  }

}

export default BookingEditForm;
