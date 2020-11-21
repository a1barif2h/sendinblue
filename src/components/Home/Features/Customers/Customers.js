import { Container, Grid } from "@material-ui/core";
import React from "react";
import Marketing from "./Marketing";

const Customers = () => {
  const marketingData = [
    {
      id: 1,
      pic:
        "https://www.sendinblue.com/wp-content/uploads/2020/03/Email-Marketing@1x.svg",
      title: "Email marketing",
      description:
        "Get the word out and sell more with sleek email messages that yu can design in no time",
    },
    {
      id: 2,
      pic:
        "https://www.sendinblue.com/wp-content/uploads/2020/03/icn-tool-sms.svg",
      title: "SMS marketing",
      description:
        "Communicate more directly with customers for urgent messages or time-sensitive offers",
    },
    {
      id: 3,
      pic: "https://www.sendinblue.com/wp-content/uploads/2020/03/Chat@1x.svg",
      title: "Chat",
      description:
        "Be there for customers instantly when they have a question while browsing your site",
    },
    {
      id: 4,
      pic: "https://www.sendinblue.com/wp-content/uploads/2020/11/Inbox-2.svg",
      title: "Inbox",
      description:
        "Keep your teams organized with a shared inbox and never lose track of your customer email history again.",
    },
  ];
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
            Be everywhere your <br /> customers are.
          </h2>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container>
            {marketingData.map((marketing) => (
              <Grid key={marketing.id} item xs={12} md={6}>
                <Marketing marketing={marketing} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Customers;
