import {
  Box,
  Typography,
  Link,
  Breadcrumbs,
  TextField,
  Button,
  Grid,
  Alert,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ContactIntro from "../assets/images/contactIntro.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Form validation schema using Yup
const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  experience: yup
    .string()
    .required("Please provide a brief description of your experience"),
});

const Career = () => {
  const theme = useTheme();
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Initialize AOS animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Typography key="2" color="#ce1e24" sx={{ fontWeight: "600" }}>
      Careers
    </Typography>,
  ];

  // Initialize react-hook-form
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
    setSubmitSuccess(true); // Show success message
    reset(); // Reset form fields after successful submission
  };

  return (
    <Box>
      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${ContactIntro})`,
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
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "0 5%",
          }}
        >
          <Box data-aos="fade-up">
            <Typography
              variant="h3"
              color="#fff"
              sx={{
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              Become a Trainer
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

      {/* Form Section */}
      <Box sx={{ py: 5, px: 3, maxWidth: "800px", margin: "0 auto" }}>
        <Typography
          sx={{
            fontSize: {
              xs: theme.typography.h5.fontSize,
              md: theme.typography.h4.fontSize,
            },
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 600,
            width: "fit-content",
            margin: { xs: "auto" },
            textAlign: "center",
          }}
        >
          APPLY TO BECOME A TRAINER
        </Typography>
        <Box
          sx={{
            background: "#ce1e24",
            width: "20%",
            height: "5px",
            margin: { xs: "0 auto 40px" },
            textAlign: "center",
          }}
        ></Box>
        {submitSuccess && (
          <Alert severity="success" sx={{ mb: 3 }}>
            Application submitted successfully! We will get back to you soon.
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="fullName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Full Name"
                    error={!!errors.fullName}
                    helperText={errors.fullName?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Phone Number"
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="experience"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    rows={4}
                    label="Briefly Describe Your Experience"
                    error={!!errors.experience}
                    helperText={errors.experience?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  py: 1.5,
                  backgroundColor: "#ce1e24",
                  "&:hover": { backgroundColor: "#b81b20" },
                }}
              >
                Submit Application
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>

      <Footer />
    </Box>
  );
};

export default Career;
