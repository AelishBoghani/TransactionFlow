import React from "react";
import CancelTransaction from "../components/CancelTransaction";
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
      <CancelTransaction/>
    </div>
  );
}

export default Lenders;
