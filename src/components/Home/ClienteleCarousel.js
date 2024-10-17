import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import nhs from "../../assets/images/nhs.png";
import haringey from "../../assets/images/haringey.jpg";
import amazon from "../../assets/images/amazon.jpg";
import foxtons from "../../assets/images/foxtons.jpg";
import networkRail from "../../assets/images/networkRail.jpg";
import enfieldCouncil from "../../assets/images/enfieldCouncil.jpg";
import next from "../../assets/images/next.png";
import channing from "../../assets/images/channing.jpg";
import harley from "../../assets/images/harley.jpeg";
import steppaz from "../../assets/images/steppaz.jpg";
import heathrow from "../../assets/images/heathrow.png";
import angelPlace from "../../assets/images/angelPlace.jpg";
import necc from "../../assets/images/necc.jpg";
import Chestertons from "../../assets/images/Chestertons.png";
import dreams from "../../assets/images/dreams.jpg";
import fedEx from "../../assets/images/fedEx.png";
import { useTheme } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const logos = [
  nhs,
  haringey,
  amazon,
  foxtons,
  networkRail,
  enfieldCouncil,
  next,
  channing,
  harley,
  steppaz,
  heathrow,
  angelPlace,
  necc,
  Chestertons,
  dreams,
  fedEx,
];

const infiniteLogos = [...logos, ...logos];

const animationStyle = {
  "@keyframes smoothScroll": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-100%)",
    },
  },
  display: "flex",
  animation: "smoothScroll 30s linear infinite",
  width: `${infiniteLogos.length * 100}px`,
};

function LogoCarousel() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const theme = useTheme();
  return (
    <Box sx={{ width: "100%", overflow: "hidden", margin: "auto", mt: 4 }}>
      <Typography
        sx={{
          fontSize: {
            xs: theme.typography.h5.fontSize,
            md: theme.typography.h4.fontSize,
          },
          fontFamily: '"Source Sans Pro", sans-serif',
          fontWeight: 600,
          width: "fit-content",
          margin: { xs: "auto" },
          textAlign: "center",
        }}
      >
        OUR CLIENTELE
      </Typography>
      <Box
        sx={{
          background: "#ce1e24",
          width: "10%",
          height: "5px",
          margin: { xs: "0 auto 10px" },
          textAlign: "center",
        }}
      ></Box>
      <Typography
        sx={{
          fontSize: "14px",
          fontFamily: '"Source Sans Pro", sans-serif',
          fontWeight: 400,
          width: "fit-content",
          textAlign: "center",
          margin: { xs: "0 auto 20px" },
        }}
      >
        We have worked with 100s of reputable companies. Here’s to name a few:
      </Typography>
      <Box sx={animationStyle}>
        {infiniteLogos.map((logo, index) => (
          <Box key={index} sx={{ flex: "0 0 auto", padding: 1 }}>
            <Box
              component="img"
              src={logo}
              alt={`Logo ${index + 1}`}
              sx={{
                width: "250px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Box>
        ))}
      </Box>
      <Box sx={{ width: "80%", margin: "50px auto" }}>
        <Divider />
      </Box>
    </Box>
  );
}

export default LogoCarousel;
