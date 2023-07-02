import getRewardPoints from "../../util/util"

const TableWrapper=({header, data, type})=>{

  const rowData = (tdata)=>{
    if (type === "TRANSACTION") {
      return (
        <>
        <td>{tdata.customerId}</td>
        <td>{tdata.transactionId}</td>
        <td>{tdata.date}</td>
        <td>{tdata.amount}</td>
        <td>{getRewardPoints(tdata.amount)}</td>
        </>
      )
    }
  }

  return (
    <table>
      <thead>
        <tr>
          {header.map((title)=>(<th>{title}</th>))}
        </tr>
      </thead>
      <tbody>
        {data.map((row)=>(
          <tr>
            {rowData(row)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableWrapper;