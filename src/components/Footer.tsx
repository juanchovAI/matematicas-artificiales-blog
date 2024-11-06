import React from "react";
import { Container, Box, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Footer: React.FC = () => {
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
            <Typography variant="h6">Enlaces</Typography>
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
            <Typography variant="h6">Información</Typography>
            <Typography>
              Matemáticas Artificiales es un blog donde exploramos el fascinante
              mundo de la inteligencia artificial, las matemáticas y el análisis
              de datos de manera simple y práctica. Únete a nuestra comunidad de
              aprendizaje para descubrir cómo los números y algoritmos pueden
              resolver problemas del mundo real. 💻🔢
            </Typography>
          </Grid>

          {/* Sección de Redes Sociales */}
          <Grid
            container
            spacing={1}
            size={4}
            style={{ flexDirection: "column", alignItems: "center" }}
          >
            <Typography variant="h6">Síguenos</Typography>
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
