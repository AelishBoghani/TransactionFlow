import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from "react";
import { Link } from "react-router-dom";

function LenderCard() {
  return (
    <div className="lender__card">
      <div>
        <img src="https://iccdn.in/lenders/icici-icon-logo-v4.svg" alt="" />
      </div>
      <div>
        <h3>ICICI Bank</h3>
        <h5>
          EMI Starting <span>@ ₹908 x 12 months</span>
        </h5>
      </div>    
      <div className='lender__arrow'>
          <Link to="/emi-selection">
          <ArrowForwardIosIcon />
          </Link>
      </div>
    </div>
  );
}

export default LenderCard;
