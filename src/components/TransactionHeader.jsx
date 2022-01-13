import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import React from "react";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function TransactionHeader() {
  return (
    <AppBar className="emi__header" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography>
            <div className="emi__header--details number">
                <div>
                <PhoneAndroidIcon />
                </div>
                <div>
                7972274972
                </div>  
            </div>
          </Typography>
          <Typography
            className="emi__header--details"
            variant="subtitle1"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Amount : <span> ₹10,000</span>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TransactionHeader;
