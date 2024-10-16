import { Box, Divider, Grid, Typography } from "@mui/material";
import Certified from "../../assets/images/jCertified.png";
import Industry from "../../assets/images/jIndustry.png";
import Experienced from "../../assets/images/jExperienced.png";
import Flexible from "../../assets/images/jFlexible.png";
import { useTheme } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import HealthCards from "./HealthCards";
import CateringCards from "./CateringCards";
import ChildcareCards from "./ChildcareCards";

const TrainingCards = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const theme = useTheme();

  return (
    <Box>
      <Box
        data-aos="fade-up"
        sx={{
          marginTop: "50px",

          fontFamily: '"Source Sans Pro", sans-serif',
        }}
      >
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
          WHY CHOOSE OUR TRAININGS?
        </Typography>
        <Box
          sx={{
            background: "#ce1e24",
            width: "30%",
            height: "5px",
            margin: { xs: "0 auto 20px" },
            textAlign: "center",
          }}
        ></Box>
        <Typography
          sx={{
            fontSize: "16px",
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 400,
            width: { xs: "100%", md: "70%" },
            margin: { xs: "0 auto 20px" },
            textAlign: "center",
          }}
        >
          We understand the importance of earning your trust. Here are the key
          reasons why you can have confidence in our services:
        </Typography>
      </Box>
      <Grid container sx={{ width: "100%", margin: "auto" }} data-aos="fade-up">
        <Grid item xs={12} sm={6} md={3} sx={{ padding: { xs: "20px" } }}>
          <img
            src={Experienced}
            alt={"Value"}
            style={{
              margin: "auto",
              display: "flex",
              width: "80px",
              height: "80px",
              border: "1px solid #ce1e24",
              borderRadius: "50%",
            }}
          />
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 700,
              margin: "10px 0",
              textAlign: "center",
            }}
          >
            Experienced Instructors
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ padding: { xs: "20px" } }}>
          <img
            src={Industry}
            alt={"Value"}
            style={{
              margin: "auto",
              display: "flex",
              width: "80px",
              height: "80px",
            }}
          />
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 700,
              margin: "10px 0",
              textAlign: "center",
            }}
          >
            Industry-Relevant Curriculum
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ padding: { xs: "20px" } }}>
          <img
            src={Flexible}
            alt={"Value"}
            style={{
              margin: "auto",
              display: "flex",
              width: "80px",
              height: "80px",
            }}
          />
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 700,
              margin: "10px 0",
              textAlign: "center",
            }}
          >
            Flexible Learning Options
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ padding: { xs: "20px" } }}>
          <img
            src={Certified}
            alt={"Value"}
            style={{
              margin: "auto",
              display: "flex",
              width: "80px",
              height: "80px",
            }}
          />
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 700,
              margin: "10px 0",
              textAlign: "center",
            }}
          >
            Certification and Recognition
          </Typography>
        </Grid>
      </Grid>

      <Divider />

      {/* Health Cards  */}
      <HealthCards />

      {/* Catering Cards  */}
      <CateringCards />

      {/* Childcare Cards  */}
      <ChildcareCards />
    </Box>
  );
};

export default TrainingCards;
