import { Container, Grid } from "@material-ui/core";
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: `Pick the tools`,
      title2: " you need",
      description:
        "Communicate and grow in one platform with email, SMS, landing pages,ads and more.",
      pic:
        "https://www.sendinblue.com/wp-content/uploads/2020/03/icn-ftr-1.svg",
    },
    {
      id: 2,
      title: "Get more done",
      title2: "in less time",
      description:
        "Focus on the important stuff and put the rest on autopilot with automation.",
      pic:
        "https://www.sendinblue.com/wp-content/uploads/2020/03/icn-ftr-2.svg",
    },
    {
      id: 3,
      title: "Play safe, we’ve",
      title2: "got your back",
      description:
        "Whatever your goal, we'll be there with round-the-clock support and a platform that is completely GDPR-compliant.",
      pic:
        "https://www.sendinblue.com/wp-content/uploads/2020/03/icn-ftr-3.svg",
    },
  ];
  return (
    <Container style={{ paddingTop: "85px" }}>
      <Grid container>
        {servicesData.map((service) => (
          <Grid key={service.id} item xs={12} md={4}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
