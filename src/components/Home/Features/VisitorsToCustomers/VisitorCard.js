import {
  ButtonBase,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";

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

const VisitorCard = ({ visitor }) => {
  const { pic, title, description } = visitor;
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

export default VisitorCard;
