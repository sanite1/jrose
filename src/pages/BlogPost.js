import { useParams } from "react-router-dom";
import { Link } from "@mui/material";

import Blogs from "../data/blogs"; // Import blog data
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  Divider,
  CardMedia,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import jBlogPostIntro from "../assets/images/jBlogPostIntro.jpg";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { useTheme } from "@mui/material/styles";

const BlogPost = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const breadcrumbs = [
    <Link underline="hover" key="1" color="#fff" href="/">
      Home
    </Link>,
    <Link underline="hover" key="2" color="#fff" href="/blogs">
      Blogs
    </Link>,
    <Typography key="3" color="#ce1e24" sx={{ fontWeight: "600" }}>
      Blogs Post
    </Typography>,
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const { id } = useParams(); // Retrieve blog ID from URL params
  const theme = useTheme();
  const blog = Blogs.find((post) => post.id === parseInt(id)); // Find the relevant blog

  if (!blog) {
    return (
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Typography variant="h4" color="error">
          Blog post not found!
        </Typography>
        <Link to="/blogs" style={{ textDecoration: "none" }}>
          <Button variant="contained" sx={{ mt: 2 }}>
            Go Back to Blogs
          </Button>
        </Link>
      </Box>
    );
  }

  return (
    <Box>
      <Navbar />

      <Box
        sx={{
          backgroundImage: `url(${jBlogPostIntro})`,
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
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: "0 5%",
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
              Blog Post
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

      <Container maxWidth="md" sx={{ mt: "10vh" }}>
        {/* Blog Title and Hero Image */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 3,
            textAlign: "center",
            fontSize: {
              xs: theme.typography.h5.fontSize,
              md: theme.typography.h4.fontSize,
            },
          }}
        >
          {blog.name}
        </Typography>
        <CardMedia
          component="img"
          image={blog.image}
          alt={blog.name}
          sx={{
            height: 400,
            borderRadius: 2,
            mb: 3,
            boxShadow: 3,
            objectFit: "cover",
          }}
        />
        {/* Blog Date */}
        <Typography
          variant="subtitle1"
          sx={{ color: "gray", mb: 2, textAlign: "right" }}
        >
          {blog.date}
        </Typography>
        {/* Blog Description */}
        <Box sx={{ mb: 5 }}>
          {blog.desc.map((paragraph, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{ mb: 2, lineHeight: 1.8, textAlign: "justify" }}
            >
              {paragraph}
            </Typography>
          ))}
        </Box>
        {/* Bullet Points (If available) */}
        {blog.bullets && (
          <Box sx={{ mb: 5 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Key Takeaways:
            </Typography>
            <ul style={{ paddingLeft: 20 }}>
              {blog.bullets.map((item, index) => (
                <li key={index} style={{ marginBottom: 10 }}>
                  <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
        )}
        <Divider sx={{ my: 3 }} />
      </Container>
      {/* Related Links */}

      <Box sx={{ width: "80%", margin: "auto" }}>
        <Box
          data-aos="fade-up"
          sx={{
            //   width: { xs: "90%", md: "80%" },
            margin: "50px auto 0",
            // padding: "50px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 700,
              borderBottom: "1px solid #ce1e24",
              width: "fit-content",
              // margin: "auto",
              marginBottom: "20px",
              // textAlign: "center",
            }}
          >
            MORE BLOGS
          </Typography>
          <Link
            href="/blogs"
            sx={{
              fontSize: "16px",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 700,
              color: "#ce1e24",
              width: "fit-content",
              marginBottom: "20px",
              textDecoration: "none",
            }}
          >
            SEE ALL
          </Link>
        </Box>
        <Grid container sx={{ width: "100%", margin: "auto" }}>
          {Blogs.filter((blog) => {
            return blog.id !== parseInt(id);
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
                      // textAlign: "center",
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

      <Footer />
    </Box>
  );
};

export default BlogPost;
