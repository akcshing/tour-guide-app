import React, {Component} from "react";
import Customer from "../../components/customers/Customer"

class CustomerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: null
    }
  }

  render(){
    return(
      <div className = "customer">
      <h1>Customer</h1>
      <Customer customer = {this.customer} />
      </div>
    )
  }

}

export default CustomerContainer;
