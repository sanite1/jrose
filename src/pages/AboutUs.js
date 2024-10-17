import { Box, Link, Divider, Typography, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import AboutUsIntro from "../assets/images/jAboutUs.webp";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// import TeamCards from "../components/Team/TeamCards";
import Footer from "../components/Footer";
import Values from "../components/AboutUs/Values";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import About from "../components/AboutUs/About";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Services from "../components/AboutUs/Services";
import Book from "../components/AboutUs/Book";
import jessica from "../assets/images/jessica.png";
import LogoCarousel from "../components/Home/ClienteleCarousel";

const AboutUs = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Typography key="2" color="#ce1e24" sx={{ fontWeight: "600" }}>
      About Us
    </Typography>,
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const theme = useTheme();

  return (
    <Box>
      <Navbar />

      <Box
        sx={{
          backgroundImage: `url(${AboutUsIntro})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "65vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "65vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "rgba(128, 128, 128, 0.7)",
            padding: "0 5%",
          }}
        >
          <Box data-aos="fade-up">
            <Typography
              variant="body2"
              color="#fff"
              sx={{
                fontSize: {
                  xs: theme.typography.h3.fontSize,
                  md: theme.typography.h2.fontSize,
                },
                fontFamily: '"Source Sans Pro", sans-serif',
                marginTop: "10px",
                fontWeight: "700",
              }}
            >
              About Us
            </Typography>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
              display="flex"
              justifyContent="center"
              mt="10px"
              color="#fff"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Box>
        </Box>
      </Box>

      {/* About us */}
      <Box
        sx={{
          width: "80%",
          margin: "50px auto",
        }}
      >
        <About />
      </Box>

      {/* Values  */}
      <Values />

      {/* Team  */}

      <Box
        data-aos="fade-up"
        sx={{
          width: { xs: "100%", md: "80%" },
          margin: "50px auto",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 400,
            borderBottom: "1px solid #ce1e24",
            width: "fit-content",
            margin: "auto",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          MEET THE DIRECTOR
        </Typography>

        <Box
          sx={{
            width: "80%",
            margin: "50px auto",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} data-aos="fade-right">
              <img
                src={jessica}
                alt="Jessica Rose Thompson"
                style={{ width: "100%" }}
              />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                Jessica Rose Thompson
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  fontWeight: 700,
                  color: "#ce1e24",
                  textAlign: "center",
                }}
              >
                CEO & Founder
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              data-aos="fade-left"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 700,
                    borderBottom: "1px solid #ce1e24",
                    width: "fit-content",
                    marginBottom: "20px",
                    textAlign: "center",
                  }}
                >
                  Bio
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 300,
                    marginBottom: "10px",
                  }}
                >
                  Meet the driving force behind J Rose Training & Consultancy,
                  Jessica Rose Thompson. With over a decade immersed in the
                  training industry, Jessica embodies a passion for empowering
                  organisations to thrive. As the founder and managing director,
                  she leads with expertise honed across diverse sectors
                  including healthcare, education, environment, construction,
                  catering, hospitality, security and many other industry
                  sectors. At J Rose, we go beyond conventional consultancy;
                  we're catalysts for growth, offering tailored support to both
                  budding enterprises and established industry leaders. With
                  Jessica at the helm, expect innovation, insight, and a
                  commitment to excellence in every endeavor.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Services />

      <LogoCarousel />

      <Box
        data-aos="fade-up"
        sx={{
          width: { xs: "100%", md: "80%" },
          margin: "0 auto 50px",
        }}
      >
        <Book />
        <Divider sx={{ width: "80%", margin: "auto" }} />
      </Box>

      <Footer />
    </Box>
  );
};

export default AboutUs;
