import { Box, Link, Divider, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import AboutUsIntro from "../assets/images/jAboutUs.webp";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TeamCards from "../components/Team/TeamCards";
import Footer from "../components/Footer";
import Values from "../components/AboutUs/Values";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import About from "../components/AboutUs/About";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Services from "../components/AboutUs/Services";
import Book from "../components/AboutUs/Book";

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
          backgroundSize: "cover", // Cover the entire box
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent tiling
          width: "100%",
          height: "65vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          // borderBottomLeftRadius: "550px 150px",
          // borderBottomRightRadius: "550px 150px",
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
          <Box>
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
      <Box
        sx={{
          width: "80%",
          margin: "50px auto",
        }}
      >
        {/* About us */}
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
          MEET THE TEAM
        </Typography>

        <TeamCards />

        <Box
          sx={{ display: "flex", justifyContent: "center", margin: "50px 0" }}
        >
          <Link
            href="/team"
            color="inherit"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              background: "#ce1e24",
              outline: "none",
              borderRadius: "10px",
              padding: "10px 24px",
              letterSpacing: "1px",
              fontSize: "14px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 300,
              color: "#fff",
            }}
          >
            Learn More <ArrowForwardIosIcon fontSize="smal" marginLeft="10px" />
          </Link>
        </Box>
        <Divider sx={{ width: "80%", margin: "auto" }} />
      </Box>

      <Services />

      <Box
        data-aos="fade-up"
        sx={{
          width: { xs: "100%", md: "80%" },
          margin: "50px auto",
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
