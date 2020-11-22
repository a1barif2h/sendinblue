import {
  AppBar,
  Button,
  Container,
  Grid,
  Link,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import FooterBaner from "./FooterBaner/FooterBaner";
import "./Footer.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  link: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuLink: {
    flexGrow: 5,
  },
  img: {
    width: "45px",
  },
  h5: {
    fontSize: "18px",
    lineHeight: "22px",
    marginBottom: "27px",
    color: "#091e3f",
  },
  ul: {
    listStyleType: "none",
    fontSize: "16px",
    lineHeight: "26px",
    marginLeft: "-35px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div style={{ paddingTop: "50px" }}>
      <FooterBaner />
      <Container style={{ paddingTop: "50px" }}>
        <AppBar
          style={{
            backgroundColor: "#fff",
            color: "#091E3F",
            boxShadow: "0 0 0 0 #fff",
          }}
          position="static"
        >
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <img
                style={{ width: "240px" }}
                src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/common/logo-color.svg"
                alt="logo"
              />
            </Typography>
            <Typography style={{ marginRight: "auto" }}>
              <Button>
                <img
                  className={classes.img}
                  src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-facebook.svg"
                  alt="facebook"
                />
              </Button>
              <Button>
                <img
                  className={classes.img}
                  src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-twitter.svg"
                  alt="twitter"
                />
              </Button>
              <Button>
                <img
                  className={classes.img}
                  src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-linkedin.svg"
                  alt="linkedIn"
                />
              </Button>
              <Button>
                <img
                  className={classes.img}
                  src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-instagram.svg"
                  alt="instagram"
                />
              </Button>
              <Button>
                <img
                  className={classes.img}
                  src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-youtube.svg"
                  alt="you tube"
                />
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid style={{ marginTop: "50px" }} container>
          <Grid style={{ marginTop: "15px" }} item xs={6} md={4}>
            <Grid container>
              <Grid item xs={4}>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    mazWidth: "130px",
                    maxHeight: "175px",
                  }}
                  src="https://www.sendinblue.com/wp-content/uploads/2019/05/CEO_Footer_image.jpg"
                  alt=""
                />
              </Grid>
              <Grid style={{ marginLeft: "10px" }} item xs={7}>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "24px",
                    color: "#606469",
                  }}
                >
                  Email, SMS, Facebook, Chat, CRM, and more, all-in-one platform
                  to help you grow your business through building stronger
                  customer relationships.
                </p>
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
                    Read more
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={3}>
            <h5 className={classes.h5}>Solutions</h5>
            <ul className={classes.ul}>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Enterprise Offer</a>
              </li>
              <li>
                <a href="/">Sendinblue vs. Mailchimp</a>
              </li>
              <li>
                <a href="/">Partner with us</a>
              </li>
              <li>
                <a href="/">Local Business Support Program</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} md={2}>
            <h5 className={classes.h5}>Company</h5>
            <ul className={classes.ul}>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Jobs</a>
              </li>
              <li>
                <a href="/">Press</a>
              </li>
              <li>
                <a href="/">Contact us</a>
              </li>
              <li>
                <a href="/">GDPR</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} md={3}>
            <h5 className={classes.h5}>Resources</h5>
            <ul className={classes.ul}>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Help center</a>
              </li>
              <li>
                <a href="/">Sendinblue Academy</a>
              </li>
              <li>
                <a href="/">Glossary</a>
              </li>
              <li>
                <a href="/">Plugins</a>
              </li>
              <li>
                <a href="/">API docs</a>
              </li>
              <li>
                <a href="/">Status</a>
              </li>
              <li>
                <a href="/">Find an agency</a>
              </li>
            </ul>
          </Grid>
        </Grid>
        <hr style={{ border: "0", borderBottom: "1px solid #D2D5D9" }} />
        <Grid
          style={{ fontSize: "13px", lineHeight: "24px", color: "#606469" }}
          container
        >
          <Grid item xs={6}>
            <p>
              &copy; {new Date().getFullYear()} Sendinblue by Arif. All rights
              reserved{" "}
            </p>
          </Grid>
          <Grid item xs={6}>
            <p style={{ textAlign: "right" }}>
              Cookies Settings, Anti-Spam, Privacy, User agreement, and Legal
              Notice
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
