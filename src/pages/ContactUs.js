import { Box, Grid, Link, Typography, TextField } from "@mui/material";
import Navbar from "../components/Navbar";
import ContactIntro from "../assets/images/jContactUs1.jpg";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

const ContactUs = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const textFieldStyles = {
    "& .MuiInput-root": {
      color: "#fff",
      fontFamily: '"Source Sans Pro", sans-serif',
      fontSize: "14px",
      padding: "5px",
      marginTop: "20px",
      "&:before": {
        borderColor: "#fff",
        borderWidth: "1px",
      },
      "&:after": {
        borderColor: "#fff",
        borderWidth: "1px",
      },
      ":hover:not(.Mui-focused)": {
        "&:before": {
          borderColor: "#fff",
          borderWidth: "1px",
        },
      },
    },
    // Label
    "& .MuiInputLabel-standard": {
      color: "#fff",
      "&.Mui-focused": {
        color: "fff",
      },
    },
  };
  const schema = yup.object().shape({
    name: yup.string().required("Name Is required"),
    email: yup.string().required("Email Is required"),
    details: yup.string().required("Message Is required"),
  });

  const { trigger, control } = useForm({
    resolver: yupResolver(schema),
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const onSubmit = () => {
    const mailtoLink = `mailto:info@jrosetrainingconsultancy.co.uk?subject=Case%20Consultation&body=Name:%20${encodeURIComponent(
      name
    )}%0AEmail:%20${encodeURIComponent(
      email
    )}%0ADetails:%20${encodeURIComponent(details)}`;
    window.location.href = mailtoLink;
  };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Typography key="2" color="#ce1e24" sx={{ fontWeight: "600" }}>
      Contact Us
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
              Contact Us
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
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} data-aos="fade-right">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Box sx={{}}>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 400,
                        borderBottom: "1px solid #ce1e24",
                        width: "fit-content",
                        marginBottom: "20px",
                        textAlign: "start",
                      }}
                    >
                      Contact Us
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "32px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 700,
                        width: { xs: "90%", md: "70%" },
                        marginBottom: "20px",
                      }}
                    >
                      We would Love to Hear from You
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 400,
                        marginBottom: "20px",
                      }}
                    >
                      At J Rose - Training & Consultancy, your feedback,
                      questions, and inquiries are important to us. Whether
                      you’re looking for more information about our services or
                      ready to explore how we can support your personal or
                      organizational growth, we’re here to help. Reach out
                      today, and let’s start a conversation about your future
                      success!
                    </Typography>
                    <Box
                      sx={{
                        display: { xs: "block", md: "flex" },
                        justifyContent: "start",
                      }}
                    >
                      <Box
                        sx={{
                          width: "fit-content",
                          display: "flex",
                          marginBottom: { xs: "30px", md: "0" },
                        }}
                      >
                        <CallIcon
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "10px",
                            background: "#ce1e24",
                            color: "#fff",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            marginRight: "20px",
                          }}
                        >
                          <Box>
                            <Typography
                              sx={{
                                fontSize: "14px",
                                fontFamily: '"Source Sans Pro", sans-serif',
                                fontWeight: 700,
                              }}
                            >
                              Give us a Call
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "12px",
                                fontFamily: '"Source Sans Pro", sans-serif',
                                fontWeight: 400,
                              }}
                            >
                              +44 793 047 0808
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          width: "fit-content",
                          display: "flex",
                        }}
                      >
                        <EmailIcon
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "10px",
                            background: "#ce1e24",
                            color: "#fff",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                          }}
                        >
                          <Box>
                            <Typography
                              sx={{
                                fontSize: "14px",
                                fontFamily: '"Source Sans Pro", sans-serif',
                                fontWeight: 700,
                              }}
                            >
                              Send us an Email
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "12px",
                                fontFamily: '"Source Sans Pro", sans-serif',
                                fontWeight: 400,
                              }}
                            >
                              info@jrosetrainingconsultancy.co.uk
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-left">
              <Box>
                <Box sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      top: { xs: "0", md: "-100px" }, // Adjust this value as needed
                      // boxSizing: { xs: "border-box", md: "content-box" },
                      padding: "10%",
                      width: "100%",
                      // backgroundImage: `url(${footerField})`,
                      backgroundSize: "cover", // Cover the entire box
                      backgroundPosition: "center", // Center the image
                      backgroundRepeat: "no-repeat", // Prevent tiling
                      borderRadius: "8px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      background: "#1d272b",
                      boxSizing: "border-box",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        width: "100%",
                        marginBottom: "25px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        letterSpacing: "1px",
                        fontWeight: "700",
                        color: "#fff",
                      }}
                    >
                      Leave us a message
                    </Typography>
                    <Controller
                      name="name"
                      marginBottom={"4px"}
                      control={control}
                      defaultValue=""
                      render={({
                        field: { ref, ...fields },
                        fieldState: { error },
                      }) => (
                        <TextField
                          sx={textFieldStyles}
                          variant="standard"
                          placeholder="Enter your full name"
                          size="small"
                          fullWidth
                          {...fields}
                          inputRef={ref}
                          error={Boolean(error?.message)}
                          helperText={error?.message}
                          onKeyUp={() => {
                            trigger("name");
                            setName(fields.value);
                          }}
                        />
                      )}
                    />
                    <Controller
                      name="email"
                      control={control}
                      defaultValue=""
                      render={({
                        field: { ref, ...fields },
                        fieldState: { error },
                      }) => (
                        <TextField
                          sx={textFieldStyles}
                          variant="standard"
                          placeholder="Enter your email"
                          size="small"
                          fullWidth
                          {...fields}
                          inputRef={ref}
                          error={Boolean(error?.message)}
                          helperText={error?.message}
                          onKeyUp={() => {
                            trigger("email");
                            setEmail(fields.value);
                          }}
                        />
                      )}
                    />
                    <Controller
                      name="details"
                      control={control}
                      defaultValue=""
                      render={({
                        field: { ref, ...fields },
                        fieldState: { error },
                      }) => (
                        <TextField
                          sx={textFieldStyles}
                          variant="standard"
                          multiline
                          minRows={4}
                          placeholder="Write your message here"
                          size="small"
                          fullWidth
                          {...fields}
                          inputRef={ref}
                          error={Boolean(error?.message)}
                          helperText={error?.message}
                          onKeyUp={() => {
                            trigger("details");
                            setDetails(fields.value);
                          }}
                        />
                      )}
                    />
                    <Box>
                      <Typography variant="body2">
                        <Link
                          onClick={onSubmit}
                          style={{
                            marginTop: "20px",
                            width: "fit-content",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            background: "#ce1e24",
                            outline: "none",
                            borderRadius: "10px",
                            padding: "10px 24px",
                            marginRight: "20px",
                            letterSpacing: "1px",
                            fontSize: "14px",
                            fontFamily: '"Source Sans Pro", sans-serif',
                            textDecoration: "none",
                            fontWeight: "600",
                            cursor: "pointer",
                          }}
                        >
                          Send Message
                        </Link>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default ContactUs;
