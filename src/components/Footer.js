import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { Facebook, Info } from "@mui/icons-material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import footerlogo from "../assets/images/jRoseLogo2.png";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
  };

  const activeLinkStyle = {
    color: "#ce1e24",
    fontWeight: "bold",
    textDecoration: "none",
  };

  return (
    <>
      <Box
        sx={{
          padding: "0 5% 5%",
          backgroundColor: "#181A1B",
          marginTop: "100px",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={8} mt={10}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <Box>
                  <img src={footerlogo} width={"80%"} alt="" srcset="" />
                </Box>
                <Typography
                  variant="caption"
                  sx={{ color: "#fff", mt: 3, width: "90%", marginTop: "20px" }}
                >
                  We provide tailored training and consultancy services to
                  bridge the gap between potential and performance. Our focus is
                  on delivering impactful solutions that drive growth and
                  success. It’s time to go beyond standard methods and implement
                  strategies that truly elevate your results.
                </Typography>
                <Box display={"flex"}>
                  <Link
                    href="https://www.instagram.com/jrose/"
                    target="_blank"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      background: "#ce1e24",
                      borderRadius: "50%",
                      color: "#fff",
                      marginTop: "20px",
                    }}
                  >
                    <InstagramIcon />
                  </Link>
                  <Link
                    href="https://www.x.com/jrose/"
                    target="_blank"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      background: "#ce1e24",
                      borderRadius: "50%",
                      color: "#fff",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                  >
                    <XIcon fontSize="small" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/jrose/"
                    target="_blank"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      background: "#ce1e24",
                      borderRadius: "50%",
                      color: "#fff",
                      marginTop: "20px",
                      marginLeft: "10px",
                    }}
                  >
                    <Facebook />
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={6} md={3.5}>
                <Box
                  sx={{ display: "flex", alignItems: "start", mb: 5, mt: 3 }}
                >
                  <Info
                    sx={{
                      color: "white",
                      backgroundColor: "rgba(255, 235, 235, 0.1)",
                      p: 1,
                      borderRadius: "4px",
                      mr: 3,
                      fontSize: "15px",
                    }}
                  />
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      sx={{
                        mb: 4,
                        fontSize: "16px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 600,
                      }}
                      color="white"
                    >
                      Quick Links
                    </Typography>
                    <Typography
                      color="white"
                      sx={{
                        mt: 2,
                        fontSize: "14px",
                        width: "100%",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      <Link
                        href="/"
                        style={
                          currentPath === "/" ? activeLinkStyle : linkStyle
                        }
                      >
                        Home
                      </Link>
                    </Typography>
                    <Typography
                      color="white"
                      sx={{
                        mt: 2,
                        fontSize: "14px",
                        width: "100%",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      <Link
                        href="/about-us"
                        style={
                          currentPath === "/about-us"
                            ? activeLinkStyle
                            : linkStyle
                        }
                      >
                        About Us
                      </Link>
                    </Typography>
                    <Typography
                      color="white"
                      sx={{
                        mt: 2,
                        fontSize: "14px",
                        width: "100%",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      <Link
                        href="/trainings"
                        style={
                          currentPath === "/trainings"
                            ? activeLinkStyle
                            : linkStyle
                        }
                      >
                        Trainings
                      </Link>
                    </Typography>
                    <Typography
                      color="white"
                      sx={{
                        mt: 2,
                        fontSize: "14px",
                        width: "100%",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      <Link
                        href="/bid-writing"
                        style={
                          currentPath === "/bid-writing"
                            ? activeLinkStyle
                            : linkStyle
                        }
                      >
                        Bid Writing
                      </Link>
                    </Typography>
                    <Typography
                      color="white"
                      sx={{
                        mt: 2,
                        fontSize: "14px",
                        width: "100%",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      <Link
                        href="/consultancy"
                        style={
                          currentPath === "/consultancy"
                            ? activeLinkStyle
                            : linkStyle
                        }
                      >
                        Consultancy Services
                      </Link>
                    </Typography>
                    <Typography
                      color="white"
                      sx={{
                        mt: 2,
                        fontSize: "14px",
                        width: "100%",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      <Link
                        href="/contact-us"
                        style={
                          currentPath === "/contact-us"
                            ? activeLinkStyle
                            : linkStyle
                        }
                      >
                        Contact Us
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} md={3.5}>
                <Box
                  sx={{ display: "flex", alignItems: "start", mb: 5, mt: 3 }}
                >
                  <Info
                    sx={{
                      color: "white",
                      backgroundColor: "rgba(255, 235, 235, 0.1)",
                      p: 1,
                      borderRadius: "4px",
                      mr: 3,
                      fontSize: "15px",
                    }}
                  />
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      sx={{
                        mb: 4,
                        fontSize: "16px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 600,
                      }}
                      color="white"
                    >
                      Company
                    </Typography>
                    <Typography
                      color="white"
                      sx={{
                        mt: 2,
                        fontSize: "14px",
                        width: "100%",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      <Link
                        href="/career"
                        style={
                          currentPath === "/career"
                            ? activeLinkStyle
                            : linkStyle
                        }
                      >
                        Career
                      </Link>
                    </Typography>
                    <Typography
                      color="white"
                      sx={{
                        mt: 2,
                        fontSize: "14px",
                        width: "100%",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      <Link
                        href="/blogs"
                        style={
                          currentPath === "/blogs" ? activeLinkStyle : linkStyle
                        }
                      >
                        Blogs
                      </Link>
                    </Typography>
                    <Typography
                      color="white"
                      sx={{
                        mt: 2,
                        fontSize: "14px",
                        width: "100%",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      <Link
                        href="/terms"
                        style={
                          currentPath === "/terms" ? activeLinkStyle : linkStyle
                        }
                      >
                        T&C
                      </Link>
                    </Typography>
                    <Typography
                      color="white"
                      sx={{
                        mt: 2,
                        width: "100%",
                        fontSize: "14px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      <Link
                        href="/faqs"
                        style={
                          currentPath === "/faqs" ? activeLinkStyle : linkStyle
                        }
                      >
                        FAQs
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} sx={{ mt: { xs: 0, md: 13 } }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "white",
                fontSize: "14px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 600,
              }}
            >
              Connect
            </Typography>
            <Divider
              width="80%"
              sx={{ height: "2px", backgroundColor: "#ce1e24", mt: 2, mb: 2 }}
            />
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }} xs={4}>
                <CallIcon fontSize="small" sx={{ color: "gray" }} />

                <Typography
                  color="white"
                  sx={{
                    ml: 2,
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                  }}
                >
                  +44 793 047 0808
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }} xs={4}>
                <EmailIcon fontSize="small" sx={{ color: "gray" }} />

                <Typography
                  color="white"
                  sx={{
                    ml: 2,
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                  }}
                >
                  info@jrosetrainingconsultancy.co.uk
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  mb: 2,
                }}
                xs={4}
              >
                <LocationOnIcon fontSize="small" sx={{ color: "gray" }} />

                <Typography
                  color="white"
                  sx={{
                    ml: 2,
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                  }}
                >
                  Greater London, England, United Kingdom
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Divider
          color="gray"
          sx={{ margin: { xs: "40px 0 10px", md: "20px 0 10px" } }}
        />
        <Typography
          color="white"
          sx={{
            mt: 2,
            fontSize: "14px",
            width: "100%",
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 300,
            textAlign: "center",
          }}
        >
          Copyright © {new Date().getFullYear()}. J Rose - Training &
          Consultancy. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
