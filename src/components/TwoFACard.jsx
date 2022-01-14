import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import VerificationCard from "./VerificationCard";

function TwoFACard({status}) {


    
  return (
    <div className="verification__card">
      <div className="verification__description">
        <div className="verification__number">2</div>
        <div>
          <div className="verification__title">Confirm Transaction</div>
          <div className="verification__detail">
            <span>Enter OTP</span>
          </div>
        </div>
      </div>
      <div className="verification__form">
        <div>
          <Input placeholder="Enter OTP" style={{ width: "200px" }} />
        </div>
        <div>
          <Link
            to="/paymentstatus"
            className="btn__css__confirmation"
            style={{ textDecoration: "none" }}
          >
            <div className="btn__css__confirmation">
              <Button variant="contained" color="success" >
                SUBMIT
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TwoFACard;
