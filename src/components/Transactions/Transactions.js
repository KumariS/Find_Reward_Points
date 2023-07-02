import useTransactions from "./useTransactions";
import TableWrapper from "../TableWrapper/TableWrapper";
import config from "../../config/config";

const Transactions = () =>{
  const transactions = useTransactions();


  const header = Object.values(config.TransactionsTitle);
  console.log(Object.values(transactions));
  return (
    <div>
      <TableWrapper header={header} data={transactions} type="TRANSACTION"/>
    </div>
  )
}

export default Transactions;