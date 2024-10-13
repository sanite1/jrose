import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { Button, TextField } from "@mui/material";
import Subscribe from "../../assets/images/Email.png";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";

const Newsletter = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Email Is Required"),
    fullname: yup.string().required("Full name Is Required"),
  });

  const {
    handleSubmit,
    trigger,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (payload) => {
    // mutate(payload);
  };

  return (
    <Box>
      <Box
        sx={{
          padding: { xs: "30px 10%", md: "0 10%" },
          backgroundColor: "#1D272C",
        }}
      >
        <Grid
          container
          data-aos="zoom-in"
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                display: { xs: "block", md: "flex" },
                alignItems: { xs: "none", md: "center" },
                height: "100%",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: {
                      xs: "35px !important",
                    },
                    fontWeight: "500",
                  }}
                >
                  Subscribe to the
                </Typography>
                <Typography
                  sx={{
                    color: "#ce1e24",
                    fontSize: {
                      xs: "35px !important",
                    },
                    fontWeight: "700",
                  }}
                >
                  J ROSE{" "}
                  <span style={{ fontWeight: "500", color: "white" }}>
                    newsletter
                  </span>
                </Typography>

                <Controller
                  name="email"
                  control={control}
                  rules={{
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Please enter a correct email",
                    },
                  }}
                  render={({ field: { onChange, value, onBlur } }) => (
                    <TextField
                      color={errors.email ? `error` : `primary`}
                      id="email"
                      placeholder="Email"
                      value={value}
                      onBlur={onBlur}
                      onKeyUp={() => {
                        trigger("email");
                      }}
                      helperText={errors.email && `${errors.email.message}`}
                      onChange={onChange}
                      sx={{
                        width: { xs: "100%", md: "80%" },
                        // mt: 5,
                        "& .MuiInputBase-input": {
                          border: "1px solid white",
                          outline: "none",
                          borderRadius: "5px",
                          color: "white",
                          paddingTop: "10px",
                          paddingBottom: "10px",
                        },
                        "& .MuiInputBase-input:hover": {
                          border: "1px solid white",
                          outline: "none",
                          borderRadius: "5px",
                          color: "white",
                        },
                        "& .MuiFormHelperText-root": {
                          color: "red !important",
                        },
                        "& .Mui-active": {
                          border: errors.email
                            ? "1px solid red"
                            : "1px solid white",
                          outline: "none",
                          borderRadius: "5px",
                        },
                        "& .Mui-focused": {
                          color: "white",
                        },
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "white", // Change the border color on hover
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "white", // Change the border color when active/focused
                          },
                        },
                      }}
                    />
                  )}
                />
                <Controller
                  name="fullname"
                  control={control}
                  render={({ field: { onChange, value, onBlur } }) => (
                    <TextField
                      color={errors.email ? `error` : `primary`}
                      id="fullname"
                      placeholder="Fullname"
                      value={value}
                      onBlur={onBlur}
                      onKeyUp={() => {
                        trigger("fullname");
                      }}
                      helperText={
                        errors.fullname && `${errors.fullname.message}`
                      }
                      onChange={onChange}
                      sx={{
                        width: { xs: "100%", md: "80%" },
                        mt: 2,
                        "& .MuiInputBase-input": {
                          border: "1px solid white",
                          outline: "none",
                          borderRadius: "5px",
                          color: "white",
                          paddingTop: "10px",
                          paddingBottom: "10px",
                        },
                        "& .MuiInputBase-input:hover": {
                          border: "1px solid white",
                          outline: "none",
                          borderRadius: "5px",
                          color: "white",
                        },
                        "& .MuiFormHelperText-root": {
                          color: "red !important",
                        },
                        "& .Mui-active": {
                          border: errors.email
                            ? "1px solid red"
                            : "1px solid white",
                          outline: "none",
                          borderRadius: "5px",
                        },
                        "& .Mui-focused": {
                          color: "white",
                        },
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "white", // Change the border color on hover
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "white", // Change the border color when active/focused
                          },
                        },
                      }}
                    />
                  )}
                />
                <LoadingButton
                  fullWidth
                  size="small"
                  //   loading={isLoading}
                  onClick={handleSubmit(onSubmit)}
                  // endIcon={<SendIcon />}
                  loadingPosition="end"
                  variant="contained"
                  sx={{
                    width: { xs: "100%", md: "80%" },
                    mt: 2,
                    pt: "10px",
                    pb: "10px",
                    background: "#ce1e24",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "16px", color: "white !important" }}
                  >
                    Subscribe
                  </Typography>
                </LoadingButton>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "80%" }}>
                <img src={Subscribe} alt="" width="100%" height="100%" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Newsletter;
