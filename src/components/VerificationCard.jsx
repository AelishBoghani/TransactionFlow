import { Button, Input, TextField } from "@mui/material";
import React from "react";

function VerificationCard() {
  return (
    <div className="verification__card">
      <div className="verification__description">
        <div className="verification__number">1</div>
        <div>
          <div className="verification__title">PAN Card Verification</div>
          <div className="verification__detail">
            <span>Enter your PAN card number</span>
            
          </div>
        </div>
      </div>
      <div className="verification__form">
        <div >
        <Input placeholder="Enter PAN" style={{width:'200px'}} />
        </div>
        <div>
        <Button variant="contained" color="success" className="btn__css__confirmation" >
              SUBMIT
            </Button>
        </div>
      </div>
    </div>
  );
}

export default VerificationCard;
