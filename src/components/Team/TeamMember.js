import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Link, Grid } from "@mui/material";
import teamMembers from "../../data/teamMembers";
import Navbar from "../Navbar";
import TeamIntro from "../../assets/images/TeamIntro.png";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Footer from "../Footer";
import Error from "../../pages/Error";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "@mui/material/styles";

const TeamMember = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const { id } = useParams();
  const member = teamMembers.find((member) => member.id === id);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const theme = useTheme();

  if (!member) {
    return <Error />;
  }

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/team">
      The Team
    </Link>,
    <Typography key="3" color="#ce1e24" sx={{ fontWeight: "600" }}>
      Team Member
    </Typography>,
  ];

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          backgroundImage: `url(${TeamIntro})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "65vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "65vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "rgba(128, 128, 128, 0.5)",
          }}
        >
          <Box data-aos="fade-up">
            <Typography
              variant="body2"
              color="#fff"
              sx={{
                fontSize: {
                  xs: theme.typography.h3.fontSize,
                  md: theme.typography.h2.fontSize,
                },
                fontFamily: '"Source Sans Pro", sans-serif',
                marginTop: "10px",
                fontWeight: "700",
              }}
            >
              Team Member
            </Typography>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
              display="flex"
              justifyContent="center"
              mt="10px"
              color="#fff"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "80%",
          margin: "50px auto",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} data-aos="fade-right">
            <img
              src={member.image}
              alt={member.name}
              style={{ width: "100%" }}
            />
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 600,
              }}
            >
              {member.name}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 600,
                color: "#ce1e24",
              }}
            >
              {member.role}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} data-aos="fade-left">
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 700,
                borderBottom: "1px solid #ce1e24",
                width: "fit-content",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Bio
            </Typography>
            {member.bio.map((member) => (
              <Typography
                key={member.id}
                sx={{
                  fontSize: "16px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  fontWeight: 300,
                  marginBottom: "10px",
                }}
              >
                {member}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};

export default TeamMember;
