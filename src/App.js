import "./App.css";
import { BrowserRouter, Route, Routes, Link, Switch } from "react-router-dom";
import Transaction from "./pages/Transaction";
import EmiOptions from "./pages/EmiOptions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Transaction />}/>
        <Route path="/emi-selection" element={<EmiOptions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
