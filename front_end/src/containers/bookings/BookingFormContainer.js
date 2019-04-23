import React, {Component} from "react";
import BookingForm from "../../components/bookings/BookingForm"
import Request from "../../helpers/request"

class BookingFormContainer extends Component {
  constructor(props) {
    super(props);

    this.handleBookingPost= this.handleBookingPost.bind(this)
  }

  componentDidMount() {

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
      />
    )
  }

}

export default BookingFormContainer;
