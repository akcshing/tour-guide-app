import React, {Component} from 'react';

class CustomerEditForm extends Component{

  constructor(props){
    super(props)
    this.state = {
      name: props.customer.name,
      age: props.customer.age,
      address: props.customer.address,
      contactNumber: props.customer.contactNumber,
      email: props.customer.email
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){

      console.log(this.props);
  }

  handleSubmit(event){
    event.preventDefault();
    const customer = {
        "name": event.target.name.value,
        "age": event.target.age.value,
        "address": event.target.address.value,
        "contactNumber": event.target.contactNumber.value,
        "email": event.target.email.value
      }

    this.props.handleCustomerUpdate(customer)
    }

    render(){
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.name} name="name" onChange={evt => this.setState({ name: evt.target.value })}/>
            <input type="number" value={this.state.age} name="age" onChange={evt => this.setState({ age: evt.target.value })}/>
            <input type="text" value={this.state.address} name="address" onChange={evt => this.setState({ address: evt.target.value })}/>
            <input type="text" value={this.state.contactNumber} name="contactNumber" onChange={evt => this.setState({ contactNumber: evt.target.value })}/>
            <input type="text" value={this.state.email} name="email" onChange={evt => this.setState({ email: evt.target.value })}/>
            <button type="submit">Save</button>
          </form>
        </div>
      )
    }
}

export default CustomerEditForm;
