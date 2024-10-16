import { Box, Grid, Link, Tooltip, Typography } from "@mui/material";
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
          Our Childcare Professional Training Package is designed for
          individuals looking to become childminders, nannies, or home
          childcarers. We provide all the essential courses and guidance needed
          to meet the regulatory and practical requirements of the role,
          ensuring you’re fully prepared to care for children safely and
          professionally.
        </Typography>
      </Box>
      <Grid container sx={{ width: "100%", margin: "auto" }}>
        {Trainings.filter((training) => {
          return training.trainingType === "childcare";
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
                    mt: 2,
                    fontSize: "14px",
                    width: "100%",
                    color: "#ce1e24",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 600,
                    borderColor: "#ce1e24",
                  }}
                  onClick={() => handleClickOpen(item)}
                >
                  Read More
                </Button>
                <Dialog
                  fullScreen={fullScreen}
                  open={open}
                  onClose={handleClose}
                  sx={{
                    "& .MuiDialog-paper": {
                      width: { xs: "100%", md: "60%" },
                      maxWidth: "none",
                      margin: { xs: "0", md: "auto" },
                      borderRadius: { xs: "0", md: "10px" },
                    },
                  }}
                >
                  {selectedItem && (
                    <>
                      <DialogTitle
                        sx={{
                          marginTop: {
                            xs: "10vh",
                            md: "0",
                            fontSize: "24px",
                            fontFamily: '"Source Sans Pro", sans-serif',
                            fontWeight: "600",
                          },
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
