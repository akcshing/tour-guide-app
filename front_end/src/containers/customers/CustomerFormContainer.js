import React, {Component} from "react";
import CustomerForm from "../../components/customers/CustomerForm"

class CustomerFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <CustomerForm />
    )
  }

}

export default CustomerFormContainer;
