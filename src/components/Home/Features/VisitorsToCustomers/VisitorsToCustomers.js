import { Button, Container, Grid } from "@material-ui/core";
import React from "react";
import VisitorCard from "./VisitorCard";

const visitorData = [
  {
    id: 1,
    pic:
      "https://www.sendinblue.com/wp-content/uploads/2020/03/icn-tool-landing.svg",
    title: "Landing pages",
    description:
      "Create a more targeted visitor experience with dedicated pages for each of your campaigns",
  },
  {
    id: 2,
    pic:
      "https://www.sendinblue.com/wp-content/uploads/2020/03/icn-tool-signup.svg",
    title: "Signup forms ",
    description:
      "Grow your email contact list with custom forms that you can integrate in your website",
  },
  {
    id: 3,
    pic:
      "https://www.sendinblue.com/wp-content/uploads/2020/03/icn-tool-fb.svg",
    title: "Facebook Ads",
    description:
      "Launch Facebook ads from your account to retarget contacts of reach new audiences based on your contact lists",
  },
  {
    id: 4,
    pic: "https://www.sendinblue.com/wp-content/uploads/2020/03/Target.svg",
    title: "Retargeting ",
    description:
      "Show ads to your website visitors as they browse other websites and bring them back to convert.",
  },
];

const VisitorsToCustomers = () => {
  return (
    <Container style={{ paddingTop: "75px" }}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <h2
            style={{
              fontSize: "32px",
              lineHeight: "38px",
              color: "#091e3f",
              textAlign: "center",
            }}
          >
            Turn your visitors <br /> into customers.
          </h2>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container>
            {visitorData.map((visitor) => (
              <Grid key={visitor.id} item xs={12} md={6}>
                <VisitorCard visitor={visitor} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <div style={{ textAlign: "center", paddingTop: "70px" }}>
        <Button
          style={{
            padding: "15px",
            borderRadius: "25px",
            fontWeight: "bold",
          }}
          variant="contained"
          color="primary"
        >
          All Features
        </Button>
      </div>
    </Container>
  );
};

export default VisitorsToCustomers;
