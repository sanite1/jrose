import { Box, Divider, Grid, Link, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";
import Trainings from "../../data/trainings";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ChildcareCards = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClickOpen = (item) => {
    setOpen(true);
    setSelectedItem(item);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };
  return (
    <Box>
      <Box
        data-aos="fade-up"
        sx={{
          margin: "50px auto",
        }}
      >
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
          CHILDCARE TRAINING PROGRAMS
        </Typography>
        <Box
          sx={{
            background: "#ce1e24",
            width: "30%",
            height: "5px",
            margin: { xs: "0 auto 50px" },
            textAlign: "center",
          }}
        ></Box>
      </Box>
      <Grid container sx={{ width: "100%", margin: "auto" }}>
        {Trainings.filter(
          (training) => training.trainingType === "childcare"
        ).map((item, pos) => (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} key={pos} data-aos="fade-right">
              <Box sx={{ width: "90%", margin: "auto", borderRadius: "20px" }}>
                <Box>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid
              data-aos="fade-left"
              item
              xs={12}
              sm={6}
              md={6}
              key={pos}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box sx={{ width: { xs: "90%", md: "100%" }, margin: "auto" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                    borderBottom: "1px solid #ce1e24",
                    width: "fit-content",
                    // margin: "auto",
                    marginBottom: "20px",
                  }}
                >
                  EXPLORE
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                    marginBottom: "10px",
                  }}
                >
                  Our Childcare Professional Training Package is designed for
                  individuals looking to become childminders, nannies, or home
                  childcarers. We provide all the essential courses and guidance
                  needed to meet the regulatory and practical requirements of
                  the role, ensuring you’re fully prepared to care for children
                  safely and professionally.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    marginBottom: "10px",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    overflow: "hidden",
                  }}
                >
                  {item.desc}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    fontSize: "14px",
                    background: "#ce1e24",
                    color: "#fff",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 600,
                    borderColor: "#ce1e24",
                    textAlign: "left",
                    width: "fit-content",
                    "&:hover": {
                      background: "#ce1e24",
                      border: "0",
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => handleClickOpen(item)}
                >
                  View Courses
                </Button>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        sx={{
          marginTop: {
            xs: "10vh",
            // md: "0",
          },
          "& .MuiDialog-paper": {
            width: { xs: "100%", md: "40%" },
            maxWidth: "none",
            margin: "auto",
            borderRadius: { xs: "0", md: "8px" },
          },
        }}
      >
        {selectedItem && (
          <>
            <DialogTitle
              sx={{
                fontSize: "24px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 600,
              }}
            >
              {selectedItem.name}
            </DialogTitle>
            <DialogContent>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  marginBottom: "10px",
                }}
              >
                {selectedItem.desc}
              </Typography>
              {selectedItem.courses.map((course, index) => (
                <Box key={index} sx={{ marginBottom: "20px" }}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 600,
                      marginBottom: "5px",
                      color: "#ce1e24",
                    }}
                  >
                    {course.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      marginBottom: "10px",
                    }}
                  >
                    <strong>Description:</strong> {course.desc}
                  </Typography>
                  {course.duration && (
                    <Typography sx={{ fontSize: "16px", marginBottom: "5px" }}>
                      <strong>Duration:</strong> {course.duration}
                    </Typography>
                  )}
                  {course.mode && (
                    <Typography sx={{ fontSize: "16px", marginBottom: "5px" }}>
                      <strong>Mode:</strong> {course.mode}
                    </Typography>
                  )}
                  {course.certification && (
                    <Typography sx={{ fontSize: "16px", marginBottom: "5px" }}>
                      <strong>Certification:</strong> {course.certification}
                    </Typography>
                  )}
                  <Typography sx={{ fontSize: "16px", marginBottom: "10px" }}>
                    <strong>Price:</strong> {course.price}
                  </Typography>
                  <Divider />
                </Box>
              ))}
            </DialogContent>
            <DialogActions>
              <Button
                sx={{
                  background: "#ce1e24",
                  color: "#fff",
                  "&:hover": {
                    background: "#a51a1f",
                  },
                }}
                onClick={handleClose}
              >
                Done
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
      <Box>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            fontSize: "14px",
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 700,
            borderBottom: "1px solid #ce1e24",
            width: "fit-content",
            transform: { xs: "" },
            margin: "20px 0",
          }}
        >
          ADDITIONAL SUPPORT FOR CHILDCARE TRAINING
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
            We understand that starting a career in childcare involves more than
            just training. Our service also guides you through other essential
            steps:
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
                <strong>DBS Checks:</strong> Assistance with obtaining DBS
                checks for you and any family members.
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
                <strong>Health Checks:</strong> Guidance on how to complete
                required health assessments.
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
                <strong>Ofsted Registration:</strong> Help with the Ofsted
                registration process to ensure compliance.
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
                <strong>Insurance and Resources:</strong> Advice on securing
                necessary public liability insurance and essential childcare
                resources.
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 700,
              margin: "20px 0 10px",
            }}
          >
            Start-Up Costs Estimate:
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 400,
              marginBottom: "20px",
            }}
          >
            Your total start-up costs, including training, DBS checks, health
            assessments, Ofsted registration, and insurance, can range{" "}
            <Box component={"span"} color={"#ce1e24"}>
              from £350
            </Box>
            , depending on individual needs and additional services required.
            For a tailored training package or ongoing support,{" "}
            <Link
              href="/contact-us"
              color="inherit"
              //   underline="none"
              sx={{
                color: "#ce1e24",
              }}
            >
              contact us
            </Link>{" "}
            today for more information or to get started with your childcare
            career!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ChildcareCards;
