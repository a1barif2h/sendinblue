import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#044A75",
    height: "100%",
  },
  title: {
    fontSize: "24px",
    color: "#fff",
    lineHeight: "29px",
  },
  description: {
    fontSize: "16px",
    lineHeight: "26px",
    color: "rgba(255,255,255,.8)",
    marginTop: "22px",
  },
  paper: {
    backgroundColor: "inherit",
    boxShadow: "none",
    margin: "auto",
    maxWidth: 500,
    padding: "75px 30px",
  },
  image: {
    width: 20,
    height: 20,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const ServiceCard = ({ service }) => {
  const { description, title, pic, title2 } = service;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={pic} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="subtitle1"
                >
                  {title} <br /> {title2}
                </Typography>
                <Typography
                  className={classes.description}
                  variant="body2"
                  gutterBottom
                >
                  {description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ServiceCard;
