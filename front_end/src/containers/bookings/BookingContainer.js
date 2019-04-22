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

  render(){
    console.log("rendering...", this.state.booking);
    return(
      <div className = "booking">
      <h1>Customer</h1>
      <Booking booking = {this.state.customer} />
      <BookingDetails booking = {this.state.booking} handleDelete = {this.handleDelete} handleEdit={this.handleEdit}/>
      </div>
    )
  }

}

export default BookingContainer;
