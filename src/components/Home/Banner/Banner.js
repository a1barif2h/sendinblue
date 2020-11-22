import { Button, Container, Grid } from "@material-ui/core";
import React from "react";
import banner from "../../../images/banner.png";

const Banner = () => {
  return (
    <Container style={{ paddingTop: "120px" }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <h1 style={{ fontSize: "72px", color: "#091E3F" }}>
            Prepare for takeoff.
          </h1>
          <p
            style={{
              fontSize: "20px",
              color: "#606469",
              borderLeft: "2px solid #FFD201",
              paddingLeft: "15px",
            }}
          >
            Make your business take flight with the <br /> complete sales &
            marketing toolbox. <br /> Grow. Sell. Engage.
          </p>
          <Button
            style={{ padding: "10px", borderRadius: "30px" }}
            variant="contained"
            color="primary"
          >
            Take a free test drive!
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img style={{ width: "90%" }} src={banner} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
