import { Box, Grid, Link, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExperienceImg from "../../assets/images/missionImg2.png";
import "aos/dist/aos.css";
import AOS from "aos";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Book = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid
          data-aos="fade-left"
          item
          xs={12}
          md={6}
          sx={{
            order: { xs: 1, md: 2 },
          }}
        >
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
                  marginBottom: "20px",
                  // transformOrigin: "center bottom",
                }}
              >
                BOOK A CONSULTATION
              </Typography>
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                    marginBottom: "20px",
                  }}
                >
                  Take the first step toward achieving your goals by booking a
                  consultation with our expert team. Whether you're seeking
                  tailored advice, strategic insights, or personalised
                  solutions, we're here to guide you. Our consultations are
                  designed to address your unique challenges and help you unlock
                  new opportunities.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 600,
                    marginBottom: "10px",
                  }}
                >
                  Why Book a Consultation?
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
                      Personalised Guidance: Get expert advice tailored to your
                      specific needs and objectives.
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
                      Strategic Insights: Benefit from in-depth knowledge and
                      actionable strategies to drive success.
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
                      Collaborative Approach: Work closely with our team to find
                      the best path forward.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    flexWrap: { xs: "wrap", md: "nowrap" },
                  }}
                >
                  <Link
                    href="/consultancy"
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
                      marginRight: "20px",
                      letterSpacing: "1px",
                      fontSize: "14px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 300,
                      marginTop: "20px",
                    }}
                  >
                    Book Now{" "}
                    <ArrowForwardIosIcon fontSize="smal" marginLeft="10px" />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid
          data-aos="fade-right"
          item
          xs={12}
          md={6}
          sx={{
            order: { xs: 2, md: 1 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              height: "100%",
            }}
          >
            <img
              src={ExperienceImg}
              alt={"experience"}
              style={{ width: "100%" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Book;
