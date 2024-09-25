import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import HomeCard from "../components/HomeCard";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

const ArticlesByAuthor = ({ posts }) => {
  const [autor, setAutor] = useState({});

  const { authorName } = useParams();
  const nombreAutor =
    authorName == "Sebastian-Vargas" ? "Sebastián Vargas" : "";
  const authorPosts = posts.filter(
    (post) => post.fields.autor.fields.name === nombreAutor
  );

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await client.getEntries({
          content_type: "blogPostAuthor",
          "fields.name": nombreAutor,
        });
        if (response.items.length > 0) {
          setAutor(response.items[0]);
        } else {
          console.log("Autor no encontrado");
        }
      } catch (error) {
        console.error("Error fetching author:", error);
      }
    };

    fetchAuthor();
  }, [authorName]);

  console.log(autor);

  return (
    <div>
      <h1 style={{ fontFamily: "titulos" }}>Artículos de {nombreAutor}</h1>
      <Grid container spacing={2}>
        {authorPosts.length > 0 ? (
          authorPosts.map((post) => {
            let resumen = post.fields.content;
            resumen = resumen.substring(0, 100) + "...";
            return (
              <Link size={4} to={`/article/${post.fields.slug}`}>
                <HomeCard
                  id={post.sys.id}
                  title={post.fields.titulo}
                  autor={post.fields.autor.fields.name}
                  resumen={resumen}
                  imgUrl={post.fields.header.fields.file.url}
                />
              </Link>
            );
          })
        ) : (
          <p>No hay artículos de este autor.</p>
        )}
      </Grid>
    </div>
  );
};

export default ArticlesByAuthor;
