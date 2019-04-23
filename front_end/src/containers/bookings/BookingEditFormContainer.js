import React, {Component} from "react";
import BookingEditForm from "../../components/bookings/BookingEditForm";
import Request from "../../helpers/request"



class BookingEditFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: null,
      customers: null,
      attractions: null
    }
    this.handleBookingUpdate = this.handleBookingUpdate.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/bookings" + this.props.id).then((booking) => {
      console.log("data:" , booking);
      this.setState({booking: booking})
    }).then(() => {
      request.get("/customers").then((customers) => {
        this.setState({customers: customers._embedded.customers})
      })
    }).then(() => {
      request.get("/attractions").then((attractions) => {
        this.setState({attractions: attractions._embedded.attractions})
      })
    });
  }

  handleBookingUpdate(booking){
    const request = new Request();
    request.patch("/bookings/" + this.props.id, booking).then(() => {
      window.location = "/booking/" + this.props.id
    })
  }

  render(){
    console.log("rendering...");
    if(!this.state.booking) return null;

    return(
      <div className = "booking-edit-form">
      <h1>Edit Booking Info</h1>
      <BookingEditForm
      booking={this.state.booking}
      handleBookingUpdate = {this.handleBookingUpdate}
      allCustomers = {this.state.customers}
      allAttractions = {this.state.attractions}
      />
      </div>
    )
  }

}

export default BookingEditFormContainer;
