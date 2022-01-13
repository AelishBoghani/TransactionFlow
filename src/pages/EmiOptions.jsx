import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CancelTransaction from "../components/CancelTransaction";
import EmiHeader from "../components/EmiHeader";
import EmiOptionsCard from "../components/EmiOptionsCard";
import TransactionHeader from "../components/TransactionHeader";

function EmiOptions() {
  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <div>
        <TransactionHeader />
        <EmiHeader />
      </div>
      <div className="emi-options__title">
        <Typography variant="h5" component="div">
          Select EMI
        </Typography>
        <Typography variant="subtitle" component="div">
          Choose the EMI tenure that is best for your help
        </Typography>
      </div>
      <div>
        <EmiOptionsCard />
        <EmiOptionsCard />
        <EmiOptionsCard />
        <EmiOptionsCard />
      </div>
      <h5 className="emi__text">* EMI has been rounded up to the next rupee</h5>

      <Link to="/confirmation" style={{ textDecoration: "none" }}>
        <div className="btn__css__emi">
          <Button variant="contained" color="success">
            Confirm
          </Button>
        </div>
      </Link>
      <CancelTransaction/>

      {/* <div className="cancel__transaction">
        <a href="#">Cancel Transaction</a>
      </div> */}
    </Container>
  );
}

export default EmiOptions;
