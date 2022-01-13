import { Button, Container, Typography } from "@mui/material";
import React from "react";
import EmiHeader from "../components/EmiHeader";
import EmiOptionsCard from "../components/EmiOptionsCard";
import TransactionHeader from "../components/TransactionHeader";

function EmiOptions() {
  return (
    <Container maxWidth="sm" style={{marginTop: '20px'}}>
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
      <div className="btn__css__emi">
      <Button variant="contained" color="success" >
              Confirm
            </Button>
      </div>
      <div className="cancel__transaction">
        <a href="#">Cancel Transaction</a>
      </div>
    </Container>
  );
}

export default EmiOptions;
