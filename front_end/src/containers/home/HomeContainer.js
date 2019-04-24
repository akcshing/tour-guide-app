import React, {Component} from "react";
import BookingList from "../../components/bookings/BookingList"
import Request from "../../helpers/request"

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      morningBookings: null,
      afternoonBookings: null,
      eveningBookings: null
    }
  }

  componentDidMount(){
    let request = new Request()
    request.get('/bookings/sort_by_time/morning').then((data) => {
      this.setState({morningBookings: data})
    })
    .then(()=>{
      request.get('/bookings/sort_by_time/afternoon').then((data) => {
        this.setState({afternoonBookings: data})
      })
    })
    .then(()=>{
      request.get('/bookings/sort_by_time/evening').then((data) => {
        this.setState({eveningBookings: data})
      })
    })
  }

  render(){
    return(
      <div className="sorted-bookings">
      <div className="booking-list">
        <BookingList bookings = {this.state.morningBookings}/>
      </div>
      <div className="booking-list">
        <BookingList bookings = {this.state.afternoonBookings}/>
      </div>
      <div className="booking-list">
        <BookingList bookings = {this.state.eveningBookings}/>
      </div>
      </div>
    )
  }
}

export default HomeContainer;
