import { Box, Link, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import ConsultancyImage from "../assets/images/jConsultancy.avif";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import ConsultancyCards from "../components/Consultancy/ConsultancyCards";

const Consultancy = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Typography key="2" color="#ce1e24" sx={{ fontWeight: "600" }}>
      Consultancy Services
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
          backgroundImage: `url(${ConsultancyImage})`,
          backgroundSize: "cover", // Cover the entire box
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent tiling
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
            backgroundColor: "rgba(128, 128, 128, 0.2)",
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
              Consultancy Services
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: theme.typography.body2.fontSize,
                  md: theme.typography.body1.fontSize,
                },
                width: { xs: "90%", md: "90%" },
                margin: "auto",
                marginBottom: "20px",
                fontFamily: '"Source Sans Pro", sans-serif',
                letterSpacing: "1px",
                color: "#fff",
              }}
            >
              Our consultancy services provide tailored strategies to help you
              achieve sustainable growth and success.
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
        {/* CARDS */}
        <ConsultancyCards />
      </Box>

      <Footer />
    </Box>
  );
};

export default Consultancy;
