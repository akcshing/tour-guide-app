import React, {Component} from "react";
import CreateLink from "../../components/crud/CreateLink"

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
      <CreateLink link="customers" />
      </div>
    )
  }

}

export default CustomerListContainer;
