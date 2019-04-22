import React, {Component} from "react";
import BookingEditForm from "../../component/booking/BookingEditForm";
import Request from "../../helpers/request"



class BookingEditFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: null
    }
    this.handleBookingUpdate = this.handleBookingUpdate.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/bookings" + this.props.id).then((booking) => {
      console.log("data:" , customer);
      this.setState({customer: customer})
    });
    console.log(this.state.booking);
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
      handleBookingUpdate = {this.handleBookingUpdate}/>
      </div>
    )
  }

}

export default BookingEditFormContainer;
