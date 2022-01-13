import "./App.css";
import { BrowserRouter, Route, Routes, Link, Switch } from "react-router-dom";
import Transaction from "./pages/Transaction";
import EmiOptions from "./pages/EmiOptions";
import Lenders from "./pages/Lenders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Transaction />}/>
        <Route path="/emi-selection" element={<EmiOptions />} />
        <Route path="/" element={<Transaction />}  />
        <Route path="/lenderslist" element={<Lenders />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
