import { Container } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";



function EmiOptionsCard() { 
   
  return (
    <label htmlFor="radioNoLabel1" >
      <div className="emi__panel cursurPointer">
        <div className="emi__grid1">
          <div className="radio__button">
            <input
              className="form-check-input"
              type="radio"
              name="radioNoLabel"
              id="radioNoLabel1"
              value=""
              aria-label="..."
            />
          </div>

          <div>
            <div className="amount__details">3</div>
            <div className="text__details">Months</div>
          </div>
        </div>
        <div className="emi__grid2">
          <div className="amount__details">₹3423</div>
          <div className="text__details">/months</div>
        </div>
        <div className="emi__grid3">
          <div className="amount__details"> ₹10276</div>
          <div className="text__details"> Total @16% p.a.</div>
        </div>
      </div>
    </label>
  );
}

export default EmiOptionsCard;
