import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
      textDecoration: "none",
      color: "#606469",
      fontSize: "16px",
      lineHeight: "26px",
      transition: "all .25s ease",
    },
  },
}));

const HeaderMenu = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <Typography className={classes.root}>
      <Link href="/" onClick={preventDefault}>
        Solutions
      </Link>
      <Link href="/" onClick={preventDefault}>
        Pricing
      </Link>
      <Link href="/" onClick={preventDefault}>
        Features
      </Link>
      <Link href="/" onClick={preventDefault}>
        Resources
      </Link>
    </Typography>
  );
};

export default HeaderMenu;
