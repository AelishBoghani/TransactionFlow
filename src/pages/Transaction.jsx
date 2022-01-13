import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { Button, Card, TextField } from "@mui/material";

export default function Transaction() {
  return (
    <div className="transaction__page">
      <Card className="transaction__card">
        <div className="transaction__grid1">
          <FormControl>
            <TextField
              id="standard-basic"
              label="Mobile Number"
              variant="standard"
            />
          </FormControl>
        </div>
        <div className="transaction__grid2">
          <FormControl>
            <TextField
              id="standard-basic"
              label="Amount"
              variant="standard"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div>
          <Button variant="contained" color="success" className="btn__css">
            Continue
          </Button>
        </div>
      </Card>
    </div>
  );
}
