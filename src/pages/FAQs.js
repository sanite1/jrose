import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { faq } from "../data/faqs";

const FAQ = () => {
  // Initialize AOS on component mount
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Accordion state management
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Navbar />

      <Box
        data-aos="fade-up"
        sx={{
          margin: "100px auto",
          width: { xs: "90%", md: "70%" },
          paddingTop: "50px",
        }}
      >
        <Typography
          variant="h3"
          color="black"
          fontWeight={600}
          textAlign="center"
          sx={{
            fontFamily: '"Source Sans Pro", sans-serif',
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Box
          sx={{
            width: "180px",
            height: "3px",
            backgroundColor: "#ce1e24",
            borderRadius: "6px",
            margin: "auto",
            mt: 2,
            mb: 10,
          }}
        />

        {faq.map((item) => (
          <Box key={item.id} data-aos="fade-up">
            <Accordion
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
              sx={{
                padding: "10px 20px",
                boxShadow: "none",
                borderBottom: "1px solid gray",
                borderRadius: "0",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    fontSize="large"
                    sx={{
                      background: expanded === item.id ? "#ce1e24" : "#000",
                      color: "white",
                      borderRadius: "50%",
                    }}
                  />
                }
                aria-controls={`panel-${item.id}-content`}
                id={`panel-${item.id}-header`}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "black",
                    fontFamily: '"Source Sans Pro", sans-serif',
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    color: "black",
                    fontFamily: '"Source Sans Pro", sans-serif',
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
      </Box>

      <Footer />
    </Box>
  );
};

export default FAQ;
