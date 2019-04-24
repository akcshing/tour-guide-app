import React from "react";
import Customer from "./Customer";

const CustomerList = ({customers}) => {
  if (!customers) return null;

  const mappedCustomers = customers.map((customer, index) => {
    return <div className="customer-container"><Customer key={index} customer={customer}/></div>
  })
  return (
    <div className = "customer-list">
    {mappedCustomers}
    </div>
  )
}

export default CustomerList;
