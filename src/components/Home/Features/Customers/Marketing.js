import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
  },
  title: {
    fontSize: "18px",
    lineHeight: "22px",
    color: "#091e3f",
    fontWeight: "bold",
  },
  description: {
    fontSize: "16px",
    lineHeight: "26px",
    marginTop: "10px",
    color: "#606469",
  },
  paper: {
    backgroundColor: "inherit",
    boxShadow: "none",
    margin: "auto",
    maxWidth: "100%",
    padding: "35px 25px",
  },
  image: {
    width: 40,
    height: 40,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const Marketing = ({ marketing }) => {
  const { pic, title, description } = marketing;
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
                  {title}
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

export default Marketing;
