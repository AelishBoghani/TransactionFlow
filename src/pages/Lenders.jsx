import React from "react";
import LenderCard from "../components/LenderCard";
import TransactionHeader from "../components/TransactionHeader";

function Lenders() {
  return (
    <div className="lender__container">
      <TransactionHeader />

      <h2 className="lender__text">Select a Lender</h2>
      <h4 className="lender__description">
        You have been pre-approved by the following lenders. Select one to
        continue with the transaction.
      </h4>
      <LenderCard />
      <LenderCard />
      <LenderCard />
      <LenderCard />
      <LenderCard />
      <div className="cancel__transaction">
        <a href="#">cancel Transaction</a>
      </div>
    </div>
  );
}

export default Lenders;
