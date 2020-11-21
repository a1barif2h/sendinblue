import { Container, Grid } from "@material-ui/core";
import React from "react";
import JourneyCard from "./JourneyCard";

const CustomerJourney = () => {
  const journeyData = [
    {
      id: 1,
      pic:
        "https://www.sendinblue.com/wp-content/uploads/2020/03/icn-tool-crm.svg",
      title: "CRM",
      description:
        "Build stronger relationships by keeping track of all your customer details in one place",
    },
    {
      id: 2,
      pic:
        "https://www.sendinblue.com/wp-content/uploads/2020/03/Marketing-Auto@1x.svg",
      title: "Marketing automation",
      description:
        "Save time and boost performance by automating your segmentation and marketing messages",
    },
    {
      id: 3,
      pic:
        "https://www.sendinblue.com/wp-content/uploads/2020/03/icn-tool-transactionmail.svg",
      title: "Transactional email",
      description:
        "Step up the design, engagement, and deliverability or your transactional email messages",
    },
    {
      id: 4,
      pic:
        "https://www.sendinblue.com/wp-content/uploads/2020/03/segmentation@1x.svg",
      title: "Segmentation",
      description:
        "Get more engagement by sending your marketing messages to a more targeted audience.",
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
            Give life to your <br /> customer journey.
          </h2>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container>
            {journeyData.map((journey) => (
              <Grid key={journey.id} item xs={12} md={6}>
                <JourneyCard journey={journey} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomerJourney;
