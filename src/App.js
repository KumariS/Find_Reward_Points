import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Transactions from "./components/Transactions/Transactions"

function App() {
  return (
    <div className="App">
    <Router>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Transactions/>}></Route>
          <Route></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
