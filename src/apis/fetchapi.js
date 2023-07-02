const customersURL = `http://localhost:3002/customers`;
const transactionsURL = `http://localhost:3002/transactions`;
const customersTransactions = `http://localhost:3002/transactions?customerId=`;

export const fetchCustomers = ()=>{
  return fetch(customersURL)
};

export const fetchTransactions = ()=>{
  return fetch(transactionsURL)
};

export const fetchCustomerTransactions = (customerId)=>{
  return fetch(customersTransactions+customerId)
};