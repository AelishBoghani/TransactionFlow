import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import TwoFACard from "./TwoFACard";

function VerificationCard() {
  var [active, setActive] = useState(false);

  function handleChange() {
    setActive(!active);
  }

  if (active) {
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
          <div>
            <Input placeholder="Enter PAN" style={{ width: "200px" }} />
          </div>
          <div>
            <div className="btn__css__confirmation">
              <Button
                onClick={handleChange}
                variant="contained"
                color="success"
              >
                SUBMIT
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      
      <TwoFACard/>
    </div>
  );
}

export default VerificationCard;
