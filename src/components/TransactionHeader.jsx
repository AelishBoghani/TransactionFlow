import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import React from "react";
import Container from "@mui/material/Container";


function TransactionHeader() {
  return (
    <Container>
      <div className="transcation__header">
        <div className="mobile__details">
          <div>
            <PhoneAndroidIcon />
          </div>
          <div>7972274972</div>
        </div>
        <div>
          Amount : <span> ₹10,000</span>
        </div>
      </div>
    </Container>
  );
}

export default TransactionHeader;
