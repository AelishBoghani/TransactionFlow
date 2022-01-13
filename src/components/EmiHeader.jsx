import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Link ,useNavigate} from "react-router-dom";

const EmiHeader = () => {
  const history = useNavigate();

  return (
    <AppBar className="emi__header" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <div>
              <Link to="/lenders-list">
              <KeyboardArrowLeftIcon onClick={history.goBack} className="emi__header--back-button" fontSize="large" style={{fill: 'black'}}/>
              </Link>
               

              <img
                src="https://iccdn.in/lenders/icici-main-logo-v3.svg"
                alt="bank-logo"
              />
            </div>
          </Typography>
          <Typography className="emi__header--details" variant='subtitle1' component="div" sx={{ flexGrow: 1 }}>
            ICICI Bank
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default EmiHeader;
