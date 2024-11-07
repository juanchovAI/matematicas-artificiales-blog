import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import HomeCard from "../components/HomeCard";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { createClient } from "contentful";
import Pronto from "../components/Pronto";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

const ArticlesByAuthor: React.FC = () => {
  const [autor, setAutor] = useState<{ name?: string }>({ name: "" });
  const [posts, setPost] = useState<any[]>([]);
  const [autorId, setAutorId] = useState<string>("");

  const { authorName } = useParams<{ authorName: string }>();
  const nombreAutor = authorName || "";

  useEffect(() => {
    if (nombreAutor) {
      switch (nombreAutor) {
        case "Sebastian-Vargas":
          setAutor({ name: "Sebastián Vargas" });
          break;
        default:
          setAutor({ name: "Sebastián Vargas" });
      }
    }
    const fetchAuthor = async () => {
      const response = await client.getEntries({
        content_type: "blogPostAuthor",
        "fields.name": autor.name,
      });
      if (response.items.length > 0) {
        setAutorId(response.items[0].sys.id);
        return;
      }
    };

    fetchAuthor();
  }, [nombreAutor]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await client.getEntries({
        content_type: "articulo",
        "fields.autor.sys.id": autorId,
      });
      setPost(response.items);
    };

    fetchPosts();
  }, [autorId]);

  console.log(posts);

  return (
    <Box>
      <Typography variant="h4">Artículos de {autor.name}</Typography>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: { xs: "1rem", md: "3rem" } }}
      >
        {posts.map((post) => {
          const resumen = post.fields.content
            ? post.fields.content.substring(0, 100) + "..."
            : "No description available";
          return (
            <Link
              to={`/article/${post.fields.slug}`}
              style={{ textDecoration: "none" }}
              key={post.sys.id}
            >
              <HomeCard
                imgUrl={post.fields.header.fields.file.url}
                title={post.fields.titulo}
                resumen={resumen}
                id={post.fields.slug}
                autor={post.fields.autor.fields.name}
                fecha={post.sys.createdAt}
                categoria={post.fields.categoria}
              />
            </Link>
          );
        })}
      </Grid>
      {posts.length === 0 && <Pronto />}
    </Box>
  );
};

export default ArticlesByAuthor;
