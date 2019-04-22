import React, {Component} from "react";
import Customer from "../../components/customers/Customer"
import CustomerDetails from "../../components/customers/CustomerDetails";
import Request from "../../helpers/request"

class CustomerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: null
    }
  }

  componentDidMount(){
    let request = new Request()
    console.log("id: ", this.props);
    const url = '/customers/' + this.props.id;
    request.get(url).then((data) => {
      this.setState({customer: data})
    })
  }

  render(){
    return(
      <div className = "customer">
      <h1>Customer</h1>
      <Customer customer = {this.customer} />
      <CustomerDetails customer = {this.state.customer} handleDelete = {this.handleDelete} handleEdit={this.handleEdit}/>
      </div>
    )
  }

}

export default CustomerContainer;
