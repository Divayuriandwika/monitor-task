import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonHeader2";
import Logo1 from "../assets/github1.png";
import Logo2 from "../assets/githubred.png";
import Logo3 from "../assets/google3.png";
import Logo4 from "../assets/googlered.png";
import Logo5 from "../assets/email.png";
import Logo6 from "../assets/emailred.png";
import Link from "@material-ui/core/Link";
import Tooltip from "@material-ui/core/Tooltip";

const styles = (theme) => ({
  root: {
    position: "absolute",
    right: 0,
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent",
  },
  logo: {
    maxWidth: 30,
    margin: 5,
  },
});

const AppBarCollapse = (props) => (
  <div className={props.classes.root}>
    <ButtonAppBarCollapse>
      <Tooltip title="Github" arrow>
        <MenuItem>
          <Link color="inherit" href="https://github.com/">
            <img src={Logo2} alt="" className={props.classes.logo} />
          </Link>{" "}
        </MenuItem>
      </Tooltip>

      <Tooltip title="Google" arrow>
        <MenuItem>
          <Link color="inherit" href="https://www.google.com/">
            <img src={Logo4} alt="" className={props.classes.logo} />
          </Link>{" "}
        </MenuItem>
      </Tooltip>

      <Tooltip title="Email" arrow>
        <MenuItem>
          <Link color="inherit" href="https://id.yahoo.com/">
            <img src={Logo6} alt="" className={props.classes.logo} />
          </Link>{" "}
        </MenuItem>
      </Tooltip>

      <MenuItem style={{ color: "#d15a5a" }}>Logout</MenuItem>
    </ButtonAppBarCollapse>
    <div className={props.classes.buttonBar} id="appbar-collapse">
      <Tooltip title="Github" arrow>
        <Button color="inherit">
          <Link color="inherit" href="https://github.com/">
            <img src={Logo1} alt="" className={props.classes.logo} />
          </Link>{" "}
        </Button>
      </Tooltip>

      <Tooltip title="Google" arrow>
        <Button color="inherit">
          <Link color="inherit" href="https://www.google.com/">
            <img src={Logo3} alt="" className={props.classes.logo} />
          </Link>{" "}
        </Button>
      </Tooltip>

      <Tooltip title="Email" arrow>
        <Button color="inherit">
          <Link color="inherit" href="https://id.yahoo.com/">
            <img src={Logo5} alt="" className={props.classes.logo} />
          </Link>{" "}
        </Button>
      </Tooltip>
      <Button color="inherit">Logout</Button>
    </div>
  </div>
);

export default withStyles(styles)(AppBarCollapse);
