import React, {Component} from "react";
import CustomerEditForm from "../../components/customers/CustomerEditForm"
import Request from "../../helpers/request"

class CustomerEditFormContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      customer: null
    }
    this.handleCustomerUpdate = this.handleCustomerUpdate.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/customers/" + this.props.id ).then((customer) => {
      console.log("data:",customer);
      this.setState({customer: customer})
    });
    console.log(this.state.customer);
  }

  handleCustomerUpdate(customer){
    const request = new Request();
    request.patch('/customers/' + this.props.id, customer).then(() => {
      window.location = '/customers/' + this.props.id
    })
  }

  render(){
    console.log("rendering...");
    if (!this.state.customer) return null;

    return(
      <div className = "customer-edit-form">
      <h1>Edit Customer Info</h1>
      <CustomerEditForm
      customer={this.state.customer}
      handleCustomerUpdate = {this.handleCustomerUpdate}/>
      </div>
    )
  }

}

export default CustomerEditFormContainer;
