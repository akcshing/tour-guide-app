import React, {Components} from 'react';

class BookingEditForm extends Components {

  constructor(props){
    super(props)
    this.state = {
      day: props.booking.day,
      time: props.booking.time,
      customer: props.booking.customer,
      attraction: props.booking.attraction
    }
    this.handleSubmit.this.handleSubmit.bind(this);
  }

  componentDidMount(){
    console.log(this.props);
  }

  handleSubmit(event){
    event.preventDefault();
    const booking = {
      "day": props.booking.day,
      "time": props.booking.time,
      "customer": props.booking.customer,
      "attraction": props.booking.attraction
    }
    this.props.handleBookingUpdate(booking)
  }

  render(){
    return(
    <div>
    <form onSubmit={this.handleSubmit}>
    <input type="text" value={this.state.day} name = "day" onChange={evt => this.setState({name: evt.target.value})}/>
    <input type="text" value={this.state.time} name = "time" onChange={evt => this.setState({time: evt.target.value})}/>
    <input type="text" value={this.state.customer} name = "cusomer" onChange={evt => this.setState({customer: evt.target.value})}/>
    <input type="text" value={this.state.attraction} name = "day" onChange={evt => this.setState({attraction: evt.target.value})}/>
    <button type="submit">Save</button>
    </form>
    </div>
    )
  }

}

export default BookingEditForm;
