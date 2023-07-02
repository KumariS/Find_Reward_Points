import {NavLink} from "react-router-dom"

const Navbar =()=>{

  return (
    <nav>
      <NavLink to="/">All Transactions</NavLink>
      <NavLink to="customer">Customer</NavLink>
      <NavLink to="customerbymonth">Customer by Month</NavLink>
    </nav>
  )
}


export default Navbar;