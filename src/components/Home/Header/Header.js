import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import HeaderMenu from "./HeaderMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  link: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuLink: {
    flexGrow: 5,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Container style={{ paddingTop: "30px" }} className={classes.root}>
      <AppBar
        style={{
          backgroundColor: "#fff",
          color: "#091E3F",
          boxShadow: "0 0 0 0 #fff",
        }}
        position="static"
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img
              style={{ width: "240px" }}
              src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/common/logo-color.svg"
              alt="logo"
            />
          </Typography>
          <Typography className={classes.menuLink}>
            <HeaderMenu />
          </Typography>
          <Button
            style={{ marginRight: "auto", fontWeight: "bold" }}
            color="inherit"
          >
            Login
          </Button>
          <Button
            style={{ padding: "15px", borderRadius: "25px" }}
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
