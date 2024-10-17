import { Box, Grid, Typography } from "@mui/material";
import AboutImg from "../../assets/images/experienceImg.png";
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
                  Who we are
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                    marginBottom: "20px",
                  }}
                >
                  J Rose Training & Consultancy stands as a distinguished leader
                  in providing enriched learning, training, and professional
                  development services, adept at catering to a diverse range of
                  industries and educational backgrounds. Our unwavering
                  dedication to excellence is evident in our bespoke learning
                  solutions and innovative teaching methods. Offering a
                  comprehensive selection of courses spanning critical areas
                  such as first aid, health and safety, staff management, and
                  more, we equip individuals and organisations with the
                  essential skills for success.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                    marginBottom: "20px",
                  }}
                >
                  Since our establishment, we have continuously evolved our
                  offerings to meet the evolving demands of emerging industries.
                  As we extend our services to governmental agencies, we are
                  uniquely positioned to deliver tailored solutions that adhere
                  to regulatory standards and bolster workforce capabilities.
                  Whether through virtual sessions, in-person training, or a
                  blend of both, we accommodate your preferences at a location
                  of your choosing.
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
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "flex-start",
                  }}
                >
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
                      sx={{ color: "#ce1e24", zIndex: 0, marginLeft: "10px" }}
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
