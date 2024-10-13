import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Link } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { keyframes } from "@emotion/react";
import homeIntro from "../../assets/images/jHomeIntro.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AOS from "aos";
import "aos/dist/aos.css";

import { useTheme } from "@mui/material/styles";

function HomeIntro() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${homeIntro})`,
        backgroundSize: "cover", // Cover the entire box
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent tiling
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "rgba(128, 128, 128, 0.7)",
          width: "100%",
          height: "100%",
        }}
      >
        <Box data-aos="fade-up">
          <Typography
            sx={{
              fontSize: {
                xs: "30px",
                md: theme.typography.h3.fontSize,
              },
              width: { xs: "80%", md: "60%" },
              margin: "auto",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 700,
              marginBottom: "10px",
              letterSpacing: "2px",
              lineHeight: "1.5",
              color: "#fff",
            }}
          >
            Your Most Trusted Partner in Training & Consultancy
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: theme.typography.body2.fontSize,
                md: theme.typography.body1.fontSize,
              },
              width: { xs: "90%", md: "70%" },
              margin: "auto",
              marginBottom: "20px",
              fontFamily: '"Source Sans Pro", sans-serif',
              letterSpacing: "1px",
              color: "#fff",
            }}
          >
            Embark on a transformative journey with us today! We specialize in
            providing tailored training and consultancy solutions that empower
            individuals and organizations to achieve their goals. Your success
            is our mission.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link
              href="/contact-us"
              color="inherit"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                background: "#ce1e24",
                color: "#fff",
                outline: "none",
                borderRadius: "10px",
                padding: "10px 24px",
                letterSpacing: "1px",
                fontSize: "14px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 300,
              }}
            >
              Get Started{" "}
              <ArrowForwardIosIcon fontSize="smal" marginLeft="10px" />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeIntro;
