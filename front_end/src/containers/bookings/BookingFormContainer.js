import React, {Component} from "react";
import BookingForm from "../../components/bookings/BookingForm"
import Request from "../../helpers/request"

class BookingFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attractions: null,
      customers: null,
      //selectedCustomer
      //selectedAttraction
      //booking
    }

    this.handleBookingPost= this.handleBookingPost.bind(this)
  }

  componentDidMount() {
    const request = new Request();

    request.get('/attractions').then((data) => {
      this.setState({attractions: data._embedded.attractions})
    }). then(() => {

    request.get('/customers').then((data)=>{
      this.setState({customers: data._embedded.customers})
    });
  });
  }

  handleBookingPost(booking){
    const request = new Request();
    request.post('/bookings', booking).then(() => {
      window.location = '/bookings'
    })
  }


  render(){
    return(
      <BookingForm
      handleBookingPost={this.handleBookingPost}
      customers = {this.state.customers}
      attractions = {this.state.attractions}
      />
    )
  }

}

export default BookingFormContainer;
