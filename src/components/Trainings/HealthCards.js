import {
  Box,
  Grid,
  Tooltip,
  Typography,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";
import Trainings from "../../data/trainings";
import useMediaQuery from "@mui/material/useMediaQuery";

const HealthCards = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <Box>
      <Box data-aos="fade-up" sx={{ margin: "50px auto" }}>
        <Typography
          sx={{
            fontSize: {
              xs: theme.typography.h5.fontSize,
              md: theme.typography.h4.fontSize,
            },
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 600,
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          HEALTH TRAINING PROGRAMS
        </Typography>
        <Box
          sx={{
            background: "#ce1e24",
            width: "30%",
            height: "5px",
            margin: "10px auto 20px",
          }}
        ></Box>
      </Box>

      <Grid container spacing={3}>
        {Trainings.filter((training) => training.trainingType === "health").map(
          (item, pos) => (
            <Grid item xs={12} sm={6} md={4} key={pos}>
              <Box sx={{ width: "90%", margin: "auto", borderRadius: "20px" }}>
                <Box>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </Box>
                <Tooltip title={item.name}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 600,
                      margin: "10px 0",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Tooltip>
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
                  variant="outlined"
                  sx={{
                    fontSize: "14px",
                    color: "#ce1e24",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 600,
                    borderColor: "#ce1e24",
                    padding: 0,
                    border: 0,
                    textAlign: "left",
                    width: "fit-content",
                    "&:hover": {
                      background: "none",
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
          )
        )}
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
    </Box>
  );
};

export default HealthCards;
