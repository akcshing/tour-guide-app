import React, {Component} from "react";
import CustomerForm from "../../components/bookings/BookingForm"
import Request from "../../helpers/request"

class BookingFormContainer extends Component {
  constructor(props) {
    super(props);

    this.handleCustomerPost= this.handleCustomerPost.bind(this)
  }

  componentDidMount() {

  }

  handleCustomerPost(customer){
    const request = new Request();
    request.post('/bookings', booking).then(() => {
      window.location = '/bookings'
    })
  }


  render(){
    return(
      <CustomerForm
      handleCustomerPost={this.handleCustomerPost}
      />
    )
  }

}

export default BookingFormContainer;
