import { Box, Divider, Grid, Tooltip, Typography } from "@mui/material";
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

const CateringCards = () => {
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
          CATERING TRAINING PROGRAMS
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
        {Trainings.filter((training) => {
          return training.trainingType === "catering";
        }).map((item, pos) => {
          return (
            <Box>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  key={pos}
                  data-aos="fade-right"
                >
                  <Box
                    sx={{ width: "90%", margin: "auto", borderRadius: "20px" }}
                  >
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
                  <Box
                    sx={{ width: { xs: "90%", md: "100%" }, margin: "auto" }}
                  >
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
                      This comprehensive training package equips catering staff
                      with a wide range of essential skills to maintain safety
                      and compliance in the workplace. It covers food hygiene
                      regulations and best practices to ensure proper food
                      handling, allergen management to minimise risks during
                      food preparation, and fire safety techniques focused on
                      kitchen-specific hazards. Additionally, staff will learn
                      safe lifting methods to prevent workplace injuries and
                      develop critical life-saving skills, enabling them to
                      respond confidently to emergencies such as choking or
                      cardiac arrest. This well-rounded training ensures a
                      safer, more efficient kitchen environment.
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
                            <Typography
                              sx={{ fontSize: "16px", marginBottom: "5px" }}
                            >
                              <strong>Duration:</strong> {course.duration}
                            </Typography>
                          )}
                          {course.mode && (
                            <Typography
                              sx={{ fontSize: "16px", marginBottom: "5px" }}
                            >
                              <strong>Mode:</strong> {course.mode}
                            </Typography>
                          )}
                          {course.certification && (
                            <Typography
                              sx={{ fontSize: "16px", marginBottom: "5px" }}
                            >
                              <strong>Certification:</strong>{" "}
                              {course.certification}
                            </Typography>
                          )}
                          <Typography
                            sx={{ fontSize: "16px", marginBottom: "10px" }}
                          >
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
        })}
      </Grid>
    </Box>
  );
};

export default CateringCards;
