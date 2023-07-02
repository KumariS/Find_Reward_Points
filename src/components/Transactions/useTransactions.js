import {useState, useEffect} from "react";
import {fetchTransactions} from "../../apis/fetchapi.js"

const useTransactions = ()=>{
  const [transactions, setTransactions] = useState([]);

  useEffect( ()=>{
    async function fetchData(){
      const res = await fetchTransactions();
      const resData = await res.json();
      setTransactions([...resData]);
    }
    fetchData();
  }, [])

  return transactions;

}

export default useTransactions;