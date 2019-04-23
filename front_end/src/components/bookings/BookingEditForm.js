import React, {Component} from 'react';

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
          <div>
          <input type = "radio" id="timeOfDay" name="timeOfDay" value="MORNING"/>
          <label for="morning">Morning</label>
          </div>

          <div>
          <input  type = "radio" id="timeOfDay" name="timeOfDay" value="AFTERNOON"/>
          <label for="afternoon">Afternoon</label>
          </div>

          <div>
          <input type = "radio" id="evening" name="timeOfDay" value="EVENING"/>
          <label for="evening">Evening</label>
          </div>
        </div>

        <div className="day">
          <div>
          <input type = "radio" id="monday" name="day" value="MONDAY"/>
          <label for="monday">Monday</label>
          </div>

          <div>
          <input type = "radio" id="tuesday" name="day" value="TUESDAY"/>
          <label for="tuesday">Tuesday</label>
          </div>

          <div>
          <input type = "radio" id="wednesday" name="day" value="WEDNESDAY"/>
          <label for="wednesday">Wednesday</label>
          </div>

          <div>
          <input type = "radio" id="thursday" name="day" value="THURSDAY"/>
          <label for="thursday">Thursday</label>
          </div>

          <div>
          <input type = "radio" id="friday" name="day" value="FRIDAY"/>
          <label for="friday">Friday</label>
          </div>

          <div>
          <input type = "radio" id="saturday" name="day" value="SATURDAY"/>
          <label for="saturday">Saturday</label>
          </div>

          <div>
          <input type = "radio" id="sunday" name="day" value="SUNDAY"/>
          <label for="sunday">Sunday</label>
          </div>
        </div>
        <button type="submit">submit</button>
      </form>
      </div>
    )
  }

}

export default BookingEditForm;
