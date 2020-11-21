import { Button, Grid } from "@material-ui/core";
import React from "react";
import fbPic from "../../../../images/png-png.png";

const FooterBaner = () => {
  return (
    <div
      style={{
        backgroundColor: "#FFAEC9",
        paddingTop: "85px",
        paddingBottom: "75px",
      }}
    >
      <Grid style={{ width: "85%", margin: "0 auto" }} container>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "75%", maxWidth: "100%", boxSizing: "inherit" }}
            src={fbPic}
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <h2
            style={{ fontSize: "50px", lineHeight: "50px", color: "#091e3f" }}
          >
            Put your marketing <br /> at full throttle!
          </h2>
          <div>
            <Button
              style={{
                padding: "17px 30px",
                borderRadius: "25px",
                fontWeight: "bold",
              }}
              variant="contained"
              color="primary"
            >
              Houston, we have lift-off!
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterBaner;
