import { Box, Grid, Typography } from "@mui/material";
import AboutImg from "../../assets/images/about0.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

const About = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} data-aos="fade-right">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              flexWrap: { xs: "wrap" },
            }}
          >
            <Box>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "end",
                  fontSize: "16px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  fontWeight: 400,
                  borderBottom: "1px solid #ce1e24",
                  width: "fit-content",
                  transform: { xs: "" },
                }}
              >
                ABOUT US
              </Typography>
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontSize: "32px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 700,
                    marginBottom: "20px",
                    width: { xs: "100%", md: "70%" },
                  }}
                >
                  This is what makes us who we are
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                    marginBottom: "20px",
                  }}
                >
                  At J Rose - Training & Consultancy, we believe that every
                  individual and organization deserves access to transformative
                  growth and expert guidance. Our team of dedicated and
                  passionate consultants is committed to delivering innovative
                  solutions, personalized services, and unwavering support to
                  help you achieve your goals. With a drive for excellence and a
                  passion for empowering success, we strive to make a lasting
                  impact on your business and community.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 600,
                    marginBottom: "10px",
                  }}
                >
                  Our Core Values:
                </Typography>
                <Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "start",
                      marginBottom: "6px",
                      zIndex: 0,
                    }}
                  >
                    <CheckCircleIcon
                      fontSize="small"
                      sx={{ color: "#ce1e24", zIndex: 0 }}
                    />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 400,
                        marginLeft: "10px",
                        zIndex: 0,
                      }}
                    >
                      Integrity
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "start",
                      marginBottom: "6px",
                      zIndex: 0,
                    }}
                  >
                    <CheckCircleIcon
                      fontSize="small"
                      sx={{ color: "#ce1e24", zIndex: 0 }}
                    />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 400,
                        marginLeft: "10px",
                        zIndex: 0,
                      }}
                    >
                      Excellence
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "start",
                      marginBottom: "6px",
                      zIndex: 0,
                    }}
                  >
                    <CheckCircleIcon
                      fontSize="small"
                      sx={{ color: "#ce1e24", zIndex: 0 }}
                    />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 400,
                        marginLeft: "10px",
                        zIndex: 0,
                      }}
                    >
                      Innovation
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-left">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              height: "100%",
            }}
          >
            <img src={AboutImg} alt={"About"} style={{ width: "100%" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
