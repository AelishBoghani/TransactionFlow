import { Container, Typography } from "@mui/material";
import React from "react";
import EmiHeader from "../components/EmiHeader";
import EmiOptionsCard from "../components/EmiOptionsCard";

function EmiOptions() {
  return (
    <Container maxWidth="sm">
      <div>
        <EmiHeader />
      </div>
      <div className="emi-options__title">
          <Typography variant='h5' component="div">Select EMI</Typography>
          <Typography variant='subtitle' component="div">Choose the EMI tenure that is best for your help</Typography>
      </div>
      <div>
          <EmiOptionsCard/>
          <EmiOptionsCard/>
          <EmiOptionsCard/>
          <EmiOptionsCard/>
      </div>
    </Container>
  );
}

export default EmiOptions;
