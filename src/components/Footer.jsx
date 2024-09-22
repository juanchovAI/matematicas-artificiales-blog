import React from "react";
import { Container, Box, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "5%",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Sección de Enlaces */}
          <Grid
            container
            spacing={1}
            size={4}
            style={{ flexDirection: "column", alignItems: "center" }}
          >
            <h2>Enlaces</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <Link href="#" color="inherit">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit">
                  Contacto
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Sección de Información */}
          <Grid
            container
            spacing={1}
            size={4}
            style={{ flexDirection: "column", alignItems: "center" }}
          >
            <h2>Información</h2>
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
            </p>
          </Grid>

          {/* Sección de Redes Sociales */}
          <Grid
            container
            spacing={1}
            size={4}
            style={{ flexDirection: "column", alignItems: "center" }}
          >
            <h2>Síguenos</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <Link href="#" color="inherit">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit">
                  Instagram
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>

        {/* Sección de Copyright */}
        <Box mt={3} textAlign="center">
          <p style={{ color: "gray" }}>
            © {new Date().getFullYear()} Matemáticas Artificiales. Todos los
            derechos reservados.
          </p>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
