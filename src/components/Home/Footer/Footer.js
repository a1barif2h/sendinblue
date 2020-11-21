import { Container, Grid } from "@material-ui/core";
import React from "react";
import FooterBaner from "./FooterBaner/FooterBaner";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <FooterBaner />
      <Container>
        <Grid className="socialIcon" container>
          <Grid xs={12} md={6}>
            <img
              style={{ width: "240px" }}
              src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/common/logo-color.svg"
              alt="logo"
            />
          </Grid>
          <Grid xs={12} md={6}>
            <div style={{ marginLeft: "350px" }}>
              <Grid container>
                <Grid item>
                  <img
                    src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-facebook.svg"
                    alt="facebook"
                  />
                </Grid>
                <Grid style={{ margin: "0 15px" }} item>
                  <img
                    src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-twitter.svg"
                    alt="twitter"
                  />
                </Grid>
                <Grid item>
                  <img
                    src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-linkedin.svg"
                    alt="linkedIn"
                  />
                </Grid>
                <Grid style={{ margin: "0 15px" }} item>
                  <img
                    src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-instagram.svg"
                    alt="instagram"
                  />
                </Grid>
                <Grid item>
                  <img
                    src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-youtube.svg"
                    alt="you tube"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
