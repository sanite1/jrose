import { Box, Link, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import ContactIntro from "../assets/images/contactIntro.png";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";

const Error = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Typography key="2" color="#ce1e24" sx={{ fontWeight: "600" }}>
      Page Not Found
    </Typography>,
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const theme = useTheme();
  return (
    <Box>
      <Navbar />

      <Box
        sx={{
          backgroundImage: `url(${ContactIntro})`,
          backgroundSize: "cover", // Cover the entire box
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent tiling
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
            backgroundColor: "rgba(128, 128, 128, 0.7)",
            padding: "0 5%",
          }}
        >
          <Box>
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
              ERROR 404
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
      <Footer />
    </Box>
  );
};

export default Error;
