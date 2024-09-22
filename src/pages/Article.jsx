import React from "react";
import { useParams } from "react-router-dom";
import MDXContent from "../components/MDXContent";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";

import "./Article.css";

const Article = ({ posts }) => {
  const { slug } = useParams();
  const post = posts.find((post) => post.fields.slug === slug);

  if (!post) {
    return <p>Artículo no encontrado</p>;
  }
  console.log(post.fields.autor.fields.image.fields.file.url);

  return (
    <Box component="section" sx={{}}>
      <Box
        className="image-header"
        sx={{
          backgroundImage: "url(" + post.fields.header.fields.file.url + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "50%",
        }}
      ></Box>

      <Box
        sx={{ overflow: "scroll", width: "100%", display: "flex", gap: "5%" }}
      >
        <Box sx={{ width: "65%" }}>
          <h1
            style={{
              fontFamily: "Titulos",
              textDecoration: "underline #f48b38 5px",
            }}
          >
            {post.fields.titulo}
          </h1>
          <p>
            <strong>Autor:</strong> {post.fields.autor.fields.name}
          </p>
          <MDXContent>{post.fields.content}</MDXContent>
        </Box>
        <Box sx={{ width: "30%" }}>
          <h2
            style={{
              fontFamily: "Titulos",
            }}
          >
            Autor
          </h2>
          <Card
            sx={{
              maxWidth: 345,
              p: "4%",
              mt: "5%",
              display: "flex",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={post.fields.autor.fields.image.fields.file.url}
                style={{
                  height: "150px",
                  borderRadius: "50%",
                  border: "solid #f48b38 5px",
                  margin: 0,
                  padding: 0,
                }}
                alt="Foto del autor"
              />
            </Box>
            <CardContent>
              <h4>{post.fields.autor.fields.name}</h4>
              <p>Lizards kjsd jk</p>
              <CardActions>
                <Button size="small">j</Button>
                <Button size="small">h</Button>
              </CardActions>
            </CardContent>
          </Card>
          <h2
            style={{
              fontFamily: "Titulos",
            }}
          >
            Artículos relacionados
          </h2>
        </Box>
      </Box>
    </Box>
  );
};

export default Article;
