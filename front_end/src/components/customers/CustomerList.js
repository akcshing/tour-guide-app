import React from "react";
import Customer from "./Customer";

const CustomerList = ({allCustomers}) => {
  if (!allCustomers) return null;

  const customers = allCustomers.map((customer, index) => {
    return <Customer key={index} customer={customer}/>
  })
  return (
    <div className = "customer-list">
    {customers}
    </div>
  )
}

export default CustomerList;
