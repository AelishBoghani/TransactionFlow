import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

export default function CancelTransaction() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <div className="cancel__transaction" variant="outlined" onClick={handleClickOpen}>
        <a href="#">Cancel Transaction</a>
      </div>
      {/* <a variant="outlined" onClick={handleClickOpen}>
        Cancel Transaction
      </a> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Cancel Transaction?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          If you cancel the transaction, you will be taken back to the merchant website.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="success">Continue With Transaction</Button>
          <Link to="/">
          <Button onClick={handleClose} variant="outlined" color="error" >
            Cancel Transaction
          </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
