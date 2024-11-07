import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import MDXContent from "../components/MDXContent";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import { Typography, useMediaQuery, Box, Tab, Tabs } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

import formatDate from "../utils/formatDate";
import tagColour from "../utils/tagColor";
import { fondo_principal } from "../themes/mainThemes";

import "./Article.css";

import PropTypes from "prop-types";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const PostPropType = PropTypes.shape({
  fields: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    categoria: PropTypes.arrayOf(PropTypes.string).isRequired,
    header: PropTypes.shape({
      fields: PropTypes.shape({
        file: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
    xurl: PropTypes.string.isRequired,
    instaUrl: PropTypes.string.isRequired,
    githubUrl: PropTypes.string.isRequired,
    autor: PropTypes.shape({
      fields: PropTypes.shape({
        image: PropTypes.shape({
          fields: PropTypes.shape({
            file: PropTypes.shape({
              url: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  sys: PropTypes.shape({
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
});

const ArticlePropTypes = {
  posts: PropTypes.arrayOf(PostPropType).isRequired,
  theme: PropTypes.string,
};

const Article = ({ posts, theme: themeProp }) => {
  const [value_tab, setValue_tab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((post) => post.fields.slug === slug);

  if (!post) {
    return <Typography>Artículo no encontrado</Typography>;
  }

  const formatedDate = formatDate(post.sys.createdAt);

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue_tab(newValue);
  };

  return (
    <Box component="section" sx={{}}>
      {isMobile ? (
        <>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value_tab}
              onChange={handleChange}
              aria-label="basic tabs"
            >
              <Tab label="Artículo" {...a11yProps(0)} />
              <Tab label="Detalles" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value_tab} index={0}>
            Item One
          </CustomTabPanel>
          <CustomTabPanel value={value_tab} index={1}>
            Item Two
          </CustomTabPanel>
        </>
      ) : (
        <>
          <Box
            className="image-header"
            sx={{
              backgroundImage:
                "url(" + post.fields.header.fields.file.url + ")",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPositionY: "50%",
            }}
          ></Box>
          <Box
            sx={{
              overflow: "scroll",
              width: "100%",
              display: "flex",
              gap: "5%",
              mt: "-3rem",
            }}
          >
            <Box sx={{ width: "65%" }}>
              <Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    mb: "1rem",
                    backgroundColor: fondo_principal[themeProp],
                    padding: "1rem 1.5rem",
                    borderTopRightRadius: "15px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "center",
                      mb: "1rem",
                    }}
                  >
                    <CalendarTodayIcon
                      style={{ width: "20px", marginTop: "-10px" }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ margin: 0, alignSelf: "center", lineHeight: 1.5 }}
                    >
                      <span style={{ fontWeight: "bold" }}>Publicado: </span>{" "}
                      {` ${formatedDate}`}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", mt: "-5px" }}>
                    <BookmarkBorderOutlinedIcon />
                    <Typography
                      variant="body1"
                      sx={{
                        margin: 0,
                        alignSelf: "center",
                        lineHeight: 1.5,
                        mt: "-10px",
                        mr: "1rem",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}>Categoria: </span>
                    </Typography>
                    {post.fields.categoria.map((cat) => (
                      <Box
                        key={cat}
                        sx={{
                          backgroundColor: tagColour(cat),
                          color: "#0B192C",
                          padding: "0.2rem 1rem",
                          borderRadius: "0.2rem",
                          display: "inline-block",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {cat}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Typography>
              <Typography variant="h4" sx={{ mb: "2rem" }}>
                {post.fields.titulo}
              </Typography>

              <Typography>
                <MDXContent>{post.fields.content}</MDXContent>
              </Typography>
            </Box>
            <Box sx={{ width: "30%", mt: "3.5rem" }}>
              <Typography sx={{ fontFamily: "Titulos" }}>
                <h2>Autor</h2>
              </Typography>

              <Card
                sx={{
                  maxWidth: 245,
                  p: "4%",
                  mt: "5%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  borderRadius: "15px",
                  pb: "0.1rem",
                }}
              >
                {" "}
                {
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <img
                      src={post.fields.autor.fields.image.fields.file.url}
                      style={{
                        maxWidth: "50%",
                        borderRadius: "50%",
                        border: "solid #f48b38 4px",
                        margin: 0,
                        padding: 0,
                      }}
                      alt="Foto del autor"
                    />
                  </Box>
                }
                <CardContent sx={{ margin: 0, padding: 0 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontFamily: "titulos", textAlign: "center" }}
                  >
                    {post.fields.autor.fields.name}
                  </Typography>
                  <Typography sx={{ textAlign: "center" }}>
                    {post.fields.autor.fields.shortBio}
                  </Typography>
                  <CardActions sx={{ mt: "" }}>
                    <Button size="small" sx={{ width: "50px" }}>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        to={post.fields.autor.fields.xurl}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography>
                          <TwitterIcon />
                        </Typography>
                      </Link>
                    </Button>
                    <Button size="small">
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        to={post.fields.autor.fields.instaUrl}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography>
                          <InstagramIcon />
                        </Typography>
                      </Link>
                    </Button>
                    <Button size="small">
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        to={post.fields.autor.fields.githubUrl}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography>
                          <GitHubIcon />
                        </Typography>
                      </Link>
                    </Button>
                  </CardActions>
                  <Link
                    to={`/author/${post.fields.autor.fields.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      {"📝 Más artículos ->"}
                    </Typography>
                  </Link>
                </CardContent>
              </Card>
              <Typography>
                <h2
                  style={{
                    fontFamily: "Titulos",
                  }}
                >
                  Artículos relacionados
                </h2>
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

Article.propTypes = ArticlePropTypes;

export default Article;
