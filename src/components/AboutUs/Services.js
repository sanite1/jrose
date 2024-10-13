import { Box, Grid, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

const Services = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Box
      sx={{
        padding: "50px 0",
        background: `#1d272c`,
        color: "#fff",
      }}
    >
      <Box
        data-aos="fade-up"
        sx={{
          width: { xs: "90%", md: "80%" },
          margin: "auto",
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
          Our Services
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
              Training
            </Typography>
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 700,
                textAlign: { xs: "justify", md: "center" },
              }}
            >
              Services
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
              Consultancy
            </Typography>
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 700,
                textAlign: { xs: "justify", md: "center" },
              }}
            >
              Services
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
