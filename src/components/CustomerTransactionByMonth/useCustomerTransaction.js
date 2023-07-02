import {useState, useEffect} from "react";
import {fetchCustomerTransactions} from "../../apis/fetchapi.js"

const useCustomerTransaction = (customerID)=>{
  const [transactions, setTransactions] = useState([]);

  useEffect( ()=>{
    async function fetchData(){
      const res = await fetchCustomerTransactions(customerID);
      const resData = await res.json();
      setTransactions([...resData]);
    }
    fetchData();
  }, [customerID])

  return transactions;

}

export default useCustomerTransaction;