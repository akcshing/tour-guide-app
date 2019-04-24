import React from 'react';

const CustomerForm = (props) => {


  function handleSubmit(event){
    event.preventDefault();
    const customer = {
        "name": event.target.name.value,
        "age": event.target.age.value,
        "address": event.target.address.value,
        "contactNumber": event.target.contactNumber.value,
        "email": event.target.email.value
      }

      props.handleCustomerPost(customer)

  }
      return (
        <div id = "create-customer-container">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name"/>
            <br></br>
            <input type="number" placeholder="Age" name="age"/>
            <br></br>
            <input type="text" placeholder="Address" name="address"/>
            <br></br>
            <input type="text" placeholder="Tel" name="contactNumber"/>
            <br></br>
            <input type="text" placeholder="Email" name="email"/>
            <br></br>
            <button type="submit">Save</button>
          </form>
        </div>
    )
}

export default CustomerForm;
