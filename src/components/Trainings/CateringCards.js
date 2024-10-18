import { Box, Grid, Tooltip, Typography } from "@mui/material";
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
            margin: { xs: "0 auto 20px" },
            textAlign: "center",
          }}
        ></Box>
        <Typography
          sx={{
            fontSize: "16px",
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 400,
            width: { xs: "100%", md: "70%" },
            margin: { xs: "0 auto 20px" },
            textAlign: "center",
          }}
        >
          Our training packages for the catering industry are tailored to meet
          the specific needs of catering businesses, ensuring staff are trained
          to the highest standards of safety, hygiene, and compliance.
        </Typography>
      </Box>
      <Grid container sx={{ width: "100%", margin: "auto" }}>
        {Trainings.filter((training) => {
          return training.trainingType === "catering";
        }).map((item, pos) => {
          return (
            <Grid
              data-aos="fade-right"
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                width: { xs: "100%", marginBottom: "20px" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "90%" },
                  margin: "auto",
                  borderRadius: "20px",
                  boxSizing: "border-box",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    height: "100%",
                  }}
                >
                  <img
                    src={item.image}
                    alt={"experience"}
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                    }}
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
                      maxWidth: "100%",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Tooltip>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    margin: "10px 0",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "300px",
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
                  Read More
                </Button>

                <Dialog
                  fullScreen={fullScreen}
                  open={open}
                  onClose={handleClose}
                  a
                  sx={{
                    marginTop: {
                      xs: "10vh",
                      // md: "0",
                    },
                    "& .MuiDialog-paper": {
                      width: { xs: "100%", md: "60%" },
                      maxWidth: "none",
                      margin: "auto",
                      borderRadius: { xs: "0", md: "8px" },
                    },
                    "& .MuiBackdrop-root": {
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                      boxShadow: "0",
                    },
                  }}
                >
                  {selectedItem && (
                    <>
                      <DialogTitle
                        sx={{
                          fontSize: "24px",
                          fontFamily: '"Source Sans Pro", sans-serif',
                          fontWeight: "600",
                        }}
                      >
                        {selectedItem.name}
                      </DialogTitle>
                      <DialogContent>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs={12} md={5}>
                            <Box
                              component="img"
                              src={selectedItem.image}
                              alt={selectedItem.name}
                              sx={{
                                width: "100%",
                                borderRadius: "10px",
                                objectFit: "cover",
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={7}>
                            <Typography
                              sx={{
                                fontSize: "16px",
                                fontFamily: '"Source Sans Pro", sans-serif',
                                marginBottom: "10px",
                              }}
                            >
                              <strong>Description:</strong> {selectedItem.desc}
                            </Typography>
                            {selectedItem.duration ? (
                              <Typography
                                sx={{
                                  fontSize: "16px",
                                  fontFamily: '"Source Sans Pro", sans-serif',
                                  marginBottom: "10px",
                                }}
                              >
                                <strong>Duration:</strong>{" "}
                                {selectedItem.duration}
                              </Typography>
                            ) : (
                              ""
                            )}
                            {selectedItem.mode ? (
                              <Typography
                                sx={{
                                  fontSize: "16px",
                                  fontFamily: '"Source Sans Pro", sans-serif',
                                  marginBottom: "10px",
                                }}
                              >
                                <strong>Mode:</strong> {selectedItem.mode}
                              </Typography>
                            ) : (
                              ""
                            )}
                            {selectedItem.certification ? (
                              <Typography
                                sx={{
                                  fontSize: "16px",
                                  fontFamily: '"Source Sans Pro", sans-serif',
                                  marginBottom: "10px",
                                }}
                              >
                                <strong>Certification:</strong>{" "}
                                {selectedItem.certification}
                              </Typography>
                            ) : (
                              ""
                            )}
                            <Typography
                              sx={{
                                fontSize: "16px",
                                fontFamily: '"Source Sans Pro", sans-serif',
                                marginBottom: "10px",
                              }}
                            >
                              <strong>Price:</strong> {selectedItem.price}
                            </Typography>
                          </Grid>
                        </Grid>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          sx={{
                            background: "#ce1e24",
                            color: "#fff",

                            "&:hover": {
                              background: "#a51a1f",
                              transform: "scale(1.05)",
                            },
                          }}
                          autoFocus
                          onClick={handleClose}
                        >
                          Done
                        </Button>
                      </DialogActions>
                    </>
                  )}
                </Dialog>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CateringCards;
