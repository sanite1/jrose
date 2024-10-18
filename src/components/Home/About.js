import { Box, Grid, Link, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExperienceImg from "../../assets/images/experienceImg.png";
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
                  // transformOrigin: "center bottom",
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
                  Empower Your Vision, Elevate Your Potential.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                    marginBottom: "20px",
                  }}
                >
                  At our consultancy, we are dedicated to empowering your vision
                  with expert guidance and innovative solutions. Our mission is
                  to elevate your potential by delivering consistent and
                  impactful results in every engagement. We believe in fostering
                  growth through a personalised approach, ensuring that our
                  services are reliable, effective, and tailored to your unique
                  needs. Guided by these core values, we are committed to
                  helping you achieve excellence and success in every endeavor.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                    marginBottom: "20px",
                  }}
                >
                  Partner with us and unlock new possibilities!
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    flexWrap: { xs: "wrap", md: "nowrap" },
                  }}
                >
                  <Link
                    href="/about-us"
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
                    }}
                  >
                    Read More{" "}
                    <ArrowForwardIosIcon fontSize="smal" marginLeft="10px" />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
