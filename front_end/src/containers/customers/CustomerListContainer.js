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
      console.log("hi", data);
    })
  }

  render(){
    console.log("rendering...");
    return(
      <div className="customer-list">
      <h1>Customer List</h1>
      <Link to="/customers/new">Create Customer</Link>
      <CustomerList customers = {this.state.customers}/>
      </div>
    )
  }
}

export default CustomerListContainer;
