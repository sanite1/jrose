import { Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Consultation from "./Consultation";

const ConsultancyCards = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Box>
      {/* Consultation Services  */}
      <Consultation />
    </Box>
  );
};

export default ConsultancyCards;
