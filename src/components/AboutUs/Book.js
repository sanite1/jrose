import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Link } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AOS from "aos";
import "aos/dist/aos.css";

function Book() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        // height: "100vh",
        padding: "50px 0",

        margin: "auto",
        zIndex: 1, // Ensure this is lower than the navbar
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
        Book Now
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Box direction="down">
          <Typography
            variant="body1"
            sx={{
              width: { xs: "90%", md: "70%" },
              margin: "auto",
              marginBottom: "20px",
              fontSize: "16px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 400,
              color: "#000",
            }}
          >
            Take the first step toward achieving your goals by booking a
            consultation with our expert team. Whether you're seeking tailored
            advice, strategic insights, or personalized solutions, we're here to
            guide you. Our consultations are designed to address your unique
            challenges and help you unlock new opportunities.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link
              href="/consultancy"
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
              Book Now
              <ArrowForwardIosIcon fontSize="smal" marginLeft="10px" />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Book;
