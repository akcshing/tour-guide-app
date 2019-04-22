import React, {Component} from "react";
import Customer from "../../components/bookings/Booking"
import CustomerDetails from "../../components/bookings/BookingDetails";
import Request from "../../helpers/request"

class BookingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: null
    }
  }

  componentDidMount(){
    let request = new Request()
    console.log("id: ", this.props);
    const url = '/bookings/' + this.props.id;
    request.get(url).then((data) => {
      this.setState({booking: data})
      console.log(this.state.booking);
    })
  }

  handleDelete(id){
    const request = new Request();
    const url = '/bookings' + id;
    request.delete(url).then(() => {
      window.location = '/bookings'
    })
  }

  render(){
    console.log("rendering...", this.state.booking);
    return(
      <div className = "booking">
      <h1>Booking</h1>
      <Booking booking = {this.state.booking}/>
      <BookingDetails booking = {this.state.booking} handleDelete = {this.handleDelete}/>
      </div>
    )
  }
}

export default BookingContainer;
