import "./App.css";
import { BrowserRouter, Route, Routes, Link, Switch } from "react-router-dom";
import Transaction from "./pages/Transaction";
import EmiOptions from "./pages/EmiOptions";
import Lenders from "./pages/Lenders";
import Confirmation from "./pages/Confirmation";
import PaymentEnd from "./pages/PaymentEnd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Transaction />}/>
        <Route path="/emi-selection" element={<EmiOptions />} />
        <Route path="/lenders-list" element={<Lenders />}/>
        <Route path="/confirmation" element={<Confirmation />}/>
        <Route path="/paymentstatus" element={<PaymentEnd />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
