import { Box, Grid, Typography } from "@mui/material";
import value1 from "../../assets/images/value1.png";
import value2 from "../../assets/images/value2.png";
import JMissionSec from "../../assets/images/jMissionSec.png";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

const Values = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Box
      sx={{
        margin: "50px auto",
        padding: "50px 0",
        backgroundImage: `url(${JMissionSec})`,
        backgroundSize: "cover", // Cover the entire box
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent tiling
        color: "#fff",
      }}
    >
      <Box
        data-aos="fade-up"
        sx={{
          width: { xs: "90%", md: "80%" },
          margin: "50px auto",
          // padding: "50px 0",
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
          Our Mission & Vison
        </Typography>
        <Typography
          sx={{
            fontSize: "32px",
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 700,
            width: { xs: "90%", md: "60%" },
            margin: "auto",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          These are the values that guide our Firm
        </Typography>
      </Box>
      <Grid container sx={{ width: "80%", margin: "auto" }}>
        <Grid
          data-aos="fade-right"
          item
          xs={12}
          sm={6}
          sx={{
            width: { xs: "100%" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "70%" },
              margin: "auto",
              padding: { xs: "20px" },
              backgroundColor: "rgba(128, 128, 128, 0.1)",
              borderRadius: "20px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 700,
                margin: "10px 0",
                textAlign: "center",
              }}
            >
              MISSION
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 400,
                textAlign: { xs: "justify", md: "center" },
              }}
            >
              At J Rose, our mission is to provide personalized, effective
              training and consultancy services that empower individuals and
              organizations to reach their full potential. Our core values of
              integrity, excellence, and reliability guide everything we do. We
              believe in fostering growth, inspiring confidence, and delivering
              lasting impact.
            </Typography>
          </Box>
        </Grid>
        <Grid
          data-aos="fade-left"
          item
          xs={12}
          sm={6}
          sx={{
            width: { xs: "100%" },
            marginTop: { xs: "20px", md: "0" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "70%" },
              margin: "auto",
              padding: { xs: "20px" },
              backgroundColor: "rgba(128, 128, 128, 0.1)",
              borderRadius: "20px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 700,
                margin: "10px 0",
                textAlign: "center",
              }}
            >
              VISION
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 400,
                textAlign: { xs: "justify", md: "center" },
              }}
            >
              At J Rose - Training & Consultancy, our vision is to be a leading
              catalyst for personal and organizational growth, empowering
              individuals and businesses to unlock their full potential. We aim
              to set new standards of excellence in training and consultancy,
              fostering innovation, leadership, and success for all those we
              serve.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Values;
