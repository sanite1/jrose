import { Box, Divider, Grid, Typography } from "@mui/material";
import Certified from "../../assets/images/jCertified.png";
import Industry from "../../assets/images/jIndustry.png";
import Experienced from "../../assets/images/jExperienced.png";
import Flexible from "../../assets/images/jFlexible.png";
import { useTheme } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

const TrainingCards = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const theme = useTheme();
  return (
    <Box>
      <Box
        data-aos="fade-up"
        sx={{
          // width: "80%",
          // margin: "auto",
          marginTop: "50px",
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
          EXPLORE OUR TRAINING PROGRAMS
        </Typography>
      </Box>
      <Grid container sx={{ width: "80%", margin: "auto" }}>
        <Grid
          data-aos="fade-right"
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            width: { xs: "100%" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "70%" },
              margin: "auto",
              padding: { xs: "20px" },
              backgroundColor: "rgba(206, 30, 36, 0.3)",
              borderRadius: "20px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 700,
                margin: "10px 0",
                textAlign: "center",
              }}
            >
              Training 1
            </Typography>
          </Box>
        </Grid>
        <Grid
          data-aos="fade-up"
          item
          xs={12}
          sm={6}
          md={4}
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
              backgroundColor: "rgba(206, 30, 36, 0.3)",
              borderRadius: "20px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 700,
                margin: "10px 0",
                textAlign: "center",
              }}
            >
              Training 2
            </Typography>
          </Box>
        </Grid>
        <Grid
          data-aos="fade-left"
          item
          xs={12}
          sm={6}
          md={4}
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
              backgroundColor: "rgba(206, 30, 36, 0.3)",
              borderRadius: "20px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 700,
                margin: "10px 0",
                textAlign: "center",
              }}
            >
              Training 3
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrainingCards;
