import React from "react";
import Customer from "./Customer";

const CustomerList = ({customers}) => {
  if (!customers) return null;
  console.log("hello", customers);
  const mappedCustomers = customers.map((customer, index) => {
    return <Customer key={index} customer={customer}/>
  })
  return (
    <div className = "customer-list">
    {mappedCustomers}
    </div>
  )
}

export default CustomerList;
