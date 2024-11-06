import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import HomeCard from "../components/HomeCard";
import SliderCard from "../components/SliderCard";
import { fuente, fondo_principal, acento } from "../themes/mainThemes";

import tagColour from "../utils/tagColor";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css/scrollbar";

interface AuthorFields {
  name: string;
}

interface HeaderFields {
  file: {
    url: string;
  };
}

interface PostFields {
  title: string;
  slug: string;
  description?: string;
  categoria: [string];
  autor: {
    fields: AuthorFields;
  };
  header: {
    fields: HeaderFields;
  };
  [key: string]: any;
}

interface Post {
  fields: PostFields;
  sys: {
    id: string;
    createdAt: string;
  };
}

const Home: React.FC<{ posts: Post[]; theme: string }> = ({ posts, theme }) => {
  const slides = [
    { title: "Slide 1", content: "Contenido del Slide 1", id: 0 },
    { title: "Slide 2", content: "Contenido del Slide 2", id: 1 },
  ];

  return (
    <>
      <Box sx={{ display: "flex", mt: "3rem" }}>
        <Box sx={{ width: "55%", height: "100%" }}>
          {posts.length > 0 && (
            <Swiper
              modules={[Autoplay, Pagination, Navigation, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              // navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 8500,
                disableOnInteraction: false,
              }}
              //  scrollbar={{ draggable: true }}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <SliderCard
                    title={posts[slide.id].fields.titulo}
                    autor={posts[slide.id].fields.autor.fields.name}
                    resumen={
                      posts[slide.id].fields.content.substring(0, 100) + "..."
                    }
                    imgUrl={posts[slide.id].fields.header.fields.file.url}
                    id={posts[slide.id].sys.id}
                    fecha={posts[slide.id].sys.createdAt}
                    categoria={posts[slide.id].fields.categoria}
                    theme={theme}
                    slug={posts[slide.id].fields.slug}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Box>
        <Box
          sx={{
            width: "2px",
            background: acento[theme],
            mr: "2rem",
            opacity: "0.3",
          }}
        />
        <Box sx={{ width: "45%" }}>
          <Typography variant="h4" sx={{ fontFamily: "titulos" }}>
            <>Matemáticas artificiales</>
          </Typography>
          <Typography variant="body1" sx={{ mt: "1rem" }}>
            💻😬 Exploramos el fascinante mundo de la inteligencia artificial,
            las matemáticas y el análisis de datos de manera simple y práctica.
            Únete a nuestra comunidad de aprendizaje para descubrir cómo los
            números y algoritmos pueden resolver problemas del mundo real.
          </Typography>
          <Typography sx={{ fontFamily: "Titulos", color: fuente[theme] }}>
            <h2>Categorias:</h2>
          </Typography>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Button
              variant="contained"
              sx={{
                fontSize: "11px",
                fontWeight: "bold",
                border: `solid ${tagColour("Inteligencia Artificial")} 2px`,
                backgroundColor: fondo_principal[theme],
                color: fuente[theme],
              }}
            >
              💡 Inteligencia artificial
            </Button>
            <Button
              variant="contained"
              sx={{
                fontSize: "11px",
                fontWeight: "bold",
                border: `solid ${tagColour("Datos")} 2px`,
                backgroundColor: fondo_principal[theme],
                color: fuente[theme],
              }}
            >
              📊 Análisis de datos
            </Button>
            <Button
              variant="contained"
              sx={{
                fontSize: "11px",
                fontWeight: "bold",
                border: `solid ${tagColour("Matemáticas")} 2px`,
                backgroundColor: fondo_principal[theme],
                color: fuente[theme],
              }}
            >
              📐 Matemáticas
            </Button>
          </Box>
        </Box>
      </Box>
      <div style={{ marginTop: "5rem", paddingBottom: "5%" }}>
        <Typography variant="h4">Artículos destacados</Typography>
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
                  title={post.fields.titulo}
                  autor={post.fields.autor.fields.name}
                  resumen={resumen}
                  imgUrl={post.fields.header.fields.file.url}
                  id={post.sys.id}
                  fecha={post.sys.createdAt}
                  categoria={post.fields.categoria}
                />
              </Link>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default Home;
