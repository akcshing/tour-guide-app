import React, {Component} from "react";
import CustomerForm from "../../components/customers/CustomerForm"
import Request from "../../helpers/request"

class CustomerFormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleCustomerPost= this.handleCustomerPost.bind(this)
  }

  componentDidMount() {

  }

  handleCustomerPost(customer){
    const request = new Request();
    request.post('/api/customers', customer).then(() => {
      window.location = '/customers'
    })
  }


  render(){
    return(
      <CustomerForm
      handleCustomerPost={this.handleCustomerPost}
      />
    )
  }

}

export default CustomerFormContainer;
