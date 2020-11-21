import { Container, Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import "./Privacy.css";

const Privacy = () => {
  return (
    <Container>
      <Grid container>
        <Grid style={{ textAlign: "right" }} item xs={12} md={6}>
          <img
            style={{ width: "400px" }}
            src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/common/shield.jpg"
            alt="shield"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <h2
            style={{ fontSize: "50px", lineHeight: "50px", color: "#091e3f" }}
          >
            Your data privacy and <br /> security are a top <br /> concern for
            us.
          </h2>
          <img
            style={{ maxWidth: "80px", maxHeight: "50px" }}
            src="https://www.sendinblue.com/wp-content/uploads/2020/06/signal-spam-grey.svg"
            alt=""
          />
          <img
            style={{ maxWidth: "80px", maxHeight: "50px", margin: "0 40px" }}
            src="https://www.sendinblue.com/wp-content/uploads/2020/03/Shape@1x.svg"
            alt=""
          />
          <img
            style={{ maxWidth: "80px", maxHeight: "50px" }}
            src="https://www.sendinblue.com/wp-content/uploads/2020/03/CSA@1x.svg"
            alt=""
          />
          <Typography
            className="tLink"
            style={{
              fontSize: "16px",
              lineHeight: "22px",

              fontWeight: "bold",
              marginTop: "35px",
            }}
          >
            <Link style={{ color: "#0092FF" }} className="link" href="/">
              {" "}
              &gt;{" "}
            </Link>
            <Link style={{ color: "#0092FF" }} className="link" href="/">
              Learn more
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Privacy;
