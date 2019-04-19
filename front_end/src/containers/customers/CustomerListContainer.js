import React, {Component} from "react";
import {Link} from 'react-router-dom';

class CustomerListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    }
  }

  render(){
    return(
      <div className="customer-list">
      <h1>Customer List</h1>
      <Link to="/customers/new">Create Customer</Link>
      </div>
    )
  }

}

export default CustomerListContainer;
