import { Container, Grid } from "@material-ui/core";
import React from "react";
import "./JoinParty.css";

const JoinParty = () => {
  return (
    <Container style={{ backgroundColor: "#044A75" }}>
      <Grid style={{ padding: "0 20px" }} container>
        <Grid
          style={{ paddingLeft: "100px", paddingTop: "40px" }}
          item
          xs={12}
          md={6}
        >
          <h2 style={{ fontSize: "50px", lineHeight: "50px", color: "#fff" }}>
            Join the <br /> party.
          </h2>
          <Grid style={{ paddingTop: "75px" }} container>
            <Grid item xs={6}>
              <h2
                style={{ fontSize: "32px", lineHeight: "38px", color: "#fff" }}
              >
                100 million
              </h2>
              <h5
                style={{
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "rgba(255,255,255,.8)",
                }}
              >
                emails every day
              </h5>
            </Grid>
            <Grid item xs={6}>
              <h2
                style={{ fontSize: "32px", lineHeight: "38px", color: "#fff" }}
              >
                10 years
              </h2>
              <h5
                style={{
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "rgba(255,255,255,.8)",
                }}
              >
                expertise
              </h5>
            </Grid>
            <Grid item xs={6}>
              <h2
                style={{ fontSize: "32px", lineHeight: "38px", color: "#fff" }}
              >
                175,000
              </h2>
              <h5
                style={{
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "rgba(255,255,255,.8)",
                }}
              >
                users in 160 countries
              </h5>
            </Grid>
            <Grid item xs={6}>
              <h2
                style={{ fontSize: "32px", lineHeight: "38px", color: "#fff" }}
              >
                $0
              </h2>
              <h5
                style={{
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "rgba(255,255,255,.8)",
                }}
              >
                to get started
              </h5>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid className="party-right" container>
            <Grid
              style={{ width: "273px", height: "328px", position: "relative" }}
              item
              xs={12}
              md={6}
            >
              <img
                src="https://www.sendinblue.com/wp-content/uploads/2020/03/haribo.png"
                alt=""
              />
            </Grid>
            <Grid
              style={{
                backgroundColor: "#166DA2",
                width: "273px",
                height: "328px",
                position: "relative",
              }}
              item
              xs={12}
              md={6}
            >
              <img
                src="https://www.sendinblue.com/wp-content/uploads/2020/03/fujitsu-logo.png"
                alt=""
              />
            </Grid>
            <Grid
              style={{
                backgroundColor: "#065687",
                width: "273px",
                height: "328px",
                position: "relative",
              }}
              item
              xs={12}
              md={6}
            >
              <img
                src="https://www.sendinblue.com/wp-content/uploads/2020/03/greenpeace-logo-white.png"
                alt=""
              />
            </Grid>
            <Grid
              style={{ width: "273px", height: "328px", position: "relative" }}
              item
              xs={12}
              md={6}
            >
              <img
                src="https://www.sendinblue.com/wp-content/uploads/2020/03/frontline-logo-white.png"
                alt=""
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default JoinParty;
