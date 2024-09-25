import React from "react";
import { Link } from "react-router-dom";
import HomeCard from "../components/HomeCard";

import Grid from "@mui/material/Grid2";

const Home = ({ posts }) => {
  return (
    <div style={{ paddingBottom: "5%" }}>
      <h1 style={{ fontFamily: "Titulos" }}>Artículo destacados</h1>
      <Grid container spacing={2}>
        {posts.map((post) => {
          let resumen = post.fields.content;
          resumen = resumen.substring(0, 100) + "...";
          return (
            <Link size={4} to={`/article/${post.fields.slug}`}>
              <HomeCard
                key={post.sys.id}
                title={post.fields.titulo}
                autor={post.fields.autor.fields.name}
                resumen={resumen}
                imgUrl={post.fields.header.fields.file.url}
              />
            </Link>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
