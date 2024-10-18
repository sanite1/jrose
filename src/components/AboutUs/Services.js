import { Box, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
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
        padding: "80px 0",
        backgroundColor: "#0f1417",
        color: "#fff",
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      {/* Header Section */}
      <Box data-aos="fade-up" sx={{ marginBottom: "40px" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontFamily: '"Source Sans Pro", sans-serif',
            borderBottom: "3px solid #ce1e24",
            display: "inline-block",
            marginBottom: "10px",
            paddingBottom: "5px",
          }}
        >
          What We Do
        </Typography>
        <Typography
          sx={{
            marginTop: "10px",
            width: { xs: "90%", md: "60%" },
            marginX: "auto",
            fontSize: "18px",
            lineHeight: 1.8,
            fontFamily: '"Source Sans Pro", sans-serif',
          }}
        >
          Our services encompass a wide range of training programs designed to
          enhance workplace safety, efficiency, and professionalism, tailored
          for various industries.
        </Typography>
      </Box>

      {/* Service Overview Section */}
      <Grid container sx={{ width: { xs: "90%", md: "80%" }, margin: "auto" }}>
        {/* Training Programs Column */}
        <Grid item xs={12} md={6} data-aos="fade-right">
          <Box
            sx={{
              backgroundColor: "rgba(206, 30, 36, 0.2)",
              borderRadius: "15px",
              padding: "30px",
              boxSizing: "border-box",
              height: "100%",
              width: { xs: "100%", md: "90%" },
              marginX: "auto",
              textAlign: "left",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, marginBottom: "15px" }}
            >
              Training Programs We Offer
            </Typography>
            {[
              "First Aid Courses",
              "General Health and Safety",
              "Infection Control",
              "Office Skills (e.g., Leadership, Cybersecurity)",
              "Mental Health in the Workplace",
              "Risk Assessment",
              "Staff Induction & Time Management",
            ].map((service, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "start",
                  marginBottom: "10px",
                }}
              >
                <StarIcon sx={{ color: "#ce1e24", marginRight: "10px" }} />
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                  }}
                >
                  {service}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Specialized Sectors Column */}
        <Grid item xs={12} md={6} data-aos="fade-left">
          <Box
            sx={{
              backgroundColor: "rgba(206, 30, 36, 0.2)",
              borderRadius: "15px",
              padding: "30px",
              boxSizing: "border-box",
              height: "100%",
              width: { xs: "100%", md: "90%" },
              marginX: "auto",
              marginTop: { xs: "20px", md: "0" },
              textAlign: "left",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, marginBottom: "15px" }}
            >
              Specialised Sectors Covered
            </Typography>
            {[
              "Healthcare",
              "Construction",
              "Governmental Institutions",
              "Fire Safety",
              "Food Safety",
              "Transport",
            ].map((sector, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "start",
                  marginBottom: "10px",
                }}
              >
                <StarIcon sx={{ color: "#ce1e24", marginRight: "10px" }} />
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                  }}
                >
                  {sector}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Why Choose Us Section */}
      <Box
        data-aos="fade-up"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "15px",
          padding: "40px 20px",
          marginTop: "40px",
          width: { xs: "90%", md: "60%" },
          marginX: "auto",
          textAlign: "left",
          boxSizing: "border-box",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: "15px" }}>
          Why Choose Us?
        </Typography>
        {[
          "Internationally recognised & accredited training courses",
          "Online, Classroom & Blended Training Options",
          "Bespoke Training Packages",
          "Engaging & Informative Sessions",
        ].map((reason, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "start", marginBottom: "10px" }}
          >
            <StarIcon sx={{ color: "#ce1e24", marginRight: "10px" }} />
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: '"Source Sans Pro", sans-serif',
              }}
            >
              {reason}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
