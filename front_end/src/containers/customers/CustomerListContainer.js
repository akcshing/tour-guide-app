import React, {Component} from "react";
import {Link} from 'react-router-dom';
import CustomerList from "../../components/customers/CustomerList"
import Request from "../../helpers/request"

class CustomerListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: null
    }
  }

  componentDidMount(){
    let request = new Request()
    request.get('/customers').then((data) => {
      this.setState({customers: data._embedded.customers})

    })
  }

  render(){

    return(
      <div>
        <div className="customer-header">
          <h1>Customers</h1>
          <Link to="/customers/new">Create Customer</Link>
        </div>
        <hr></hr>
        <div className="customer-list">
          <CustomerList customers = {this.state.customers}/>
        </div>
      </div>
    )
  }
}

export default CustomerListContainer;
