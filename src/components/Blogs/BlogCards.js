import { Box, Grid, Typography, Link } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Blogs from "../../data/blogs";

const BlogCards = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
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
            fontSize: "16px",
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 400,
            borderBottom: "1px solid #ce1e24",
            width: "fit-content",
            marginBottom: "20px",
          }}
        >
          EXPLORE OUR LATEST BLOGS
        </Typography>
      </Box>
      <Grid container sx={{ width: "100%", margin: "auto" }}>
        {Blogs.map((item, pos) => {
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
                      backgroundColor: "rgba(206, 30, 36, 0.3)",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 600,
                    margin: "10px 0 0",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "100%",
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    margin: "5px 0",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "300px",
                  }}
                >
                  {item.date}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    width: "100%",
                    color: "#ce1e24",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 600,
                  }}
                >
                  <Link color="#ce1e24" href={`/blogs/${item.id}`}>
                    Read More
                  </Link>
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default BlogCards;
