import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import {
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Icono de hamburguesa
import { createClient } from "contentful";

// Páginas y componentes
import Home from "./pages/Home";
import ArticlesByAuthor from "./pages/ArticlesByAuthor";
import FilteredArticles from "./pages/FilteredArticles";
import Article from "./pages/Article";
import Footer from "./components/Footer";

import {
  light_theme,
  main_theme,
  dark_theme,
  fondo_principal,
  fuente,
  acento,
} from "./themes/mainThemes";

import logo_main from "./assets/logo_main.png";
import logo_light from "./assets/logo_light.png";
import logo_dark from "./assets/logo_dark.png";
import "./App.css";

// Cliente de Contentful
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

const App = () => {
  const [posts, setPosts] = useState([]);
  const [theme, setTheme] = useState("main");
  const [drawerOpen, setDrawerOpen] = useState(false); // Estado para controlar el menú móvil

  // Obtener posts desde Contentful
  useEffect(() => {
    client
      .getEntries({ content_type: "articulo" })
      .then((response) => setPosts(response.items))
      .catch(console.error);
  }, []);

  // Función para cambiar el tema
  const changeTheme = (theme) => {
    setTheme(theme);
  };

  // Función para abrir/cerrar el menú lateral
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  // Detectar si la pantalla es de escritorio o móvil
  const isDesktop = useMediaQuery("(min-width: 900px)");

  return (
    <Box
      sx={{
        background: fondo_principal[theme],
        width: "100%",
        margin: 0,
        height: "100%",
      }}
    >
      <Router>
        <ThemeProvider
          theme={
            theme === "main"
              ? main_theme
              : theme === "light"
              ? light_theme
              : dark_theme
          }
        >
          {/* Barra superior con el logo y el menú */}
          <Box
            component="section"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: { xs: "6%", md: "10%" },
              px: "5%",
              backgroundColor: fondo_principal[theme],
              color: fuente[theme],
            }}
          >
            <NavLink to="/">
              <img
                src={
                  theme === "main"
                    ? logo_main
                    : theme === "light"
                    ? logo_light
                    : logo_dark
                }
                className="logo"
                alt="Logo principal de la app matemáticas artificiales"
                style={{ margin: 0 }}
              />
            </NavLink>

            {/* Menú de escritorio o menú de hamburguesa dependiendo de la pantalla */}
            {isDesktop ? (
              <Box
                component="nav"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  style={{ color: fuente[theme] }}
                >
                  Inicio
                </NavLink>
                <NavLink
                  to="/author/Sebastian-Vargas"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  style={{ color: fuente[theme] }}
                >
                  Sobre el Autor
                </NavLink>
                <NavLink
                  to="/filter/category/Matemáticas"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  style={{ color: fuente[theme] }}
                >
                  Contacto
                </NavLink>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  <div
                    onClick={() => changeTheme("main")}
                    style={{
                      background: fondo_principal.main,
                      border:
                        "solid " +
                        (theme === "main"
                          ? acento.main + " 2px"
                          : fuente[theme] + " 1px"),
                      width: "15px",
                      height: "15px",
                      borderRadius: "15px",
                    }}
                  ></div>
                  <div
                    onClick={() => changeTheme("light")}
                    style={{
                      background: fondo_principal.light,
                      border:
                        "solid " +
                        (theme === "light"
                          ? acento.light + " 2px"
                          : fuente[theme] + " 1px"),
                      width: "15px",
                      height: "15px",
                      borderRadius: "15px",
                    }}
                  ></div>
                  <div
                    onClick={() => changeTheme("dark")}
                    style={{
                      background: fondo_principal.dark,
                      border:
                        "solid " +
                        (theme === "dark"
                          ? acento.dark + " 2px"
                          : fuente[theme] + " 1px"),
                      width: "15px",
                      height: "15px",
                      borderRadius: "15px",
                    }}
                  ></div>
                </Box>
              </Box>
            ) : (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => toggleDrawer(true)}
              >
                <MenuIcon style={{ color: fuente[theme] }} />
              </IconButton>
            )}
          </Box>

          {/* Drawer (menú desplegable) para móvil */}
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => toggleDrawer(false)}
          >
            <Box
              sx={{
                width: 250,
                background: fondo_principal[theme],
                height: "100%",
              }}
              onClick={() => toggleDrawer(false)}
            >
              <List>
                <ListItem button component={NavLink} to="/">
                  <ListItemText
                    sx={{ color: fuente[theme] }}
                    primary="Inicio"
                  />
                </ListItem>
                <ListItem
                  button
                  component={NavLink}
                  to="/author/Sebastian-Vargas"
                >
                  <ListItemText
                    sx={{ color: fuente[theme] }}
                    primary="Sobre el Autor"
                  />
                </ListItem>
                <ListItem
                  button
                  component={NavLink}
                  to="/filter/category/Matemáticas"
                >
                  <ListItemText
                    sx={{ color: fuente[theme] }}
                    primary="Contacto"
                  />
                </ListItem>
              </List>
              <ListItem>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  <div
                    onClick={() => changeTheme("main")}
                    style={{
                      background: fondo_principal.main,
                      border:
                        "solid " +
                        (theme === "main"
                          ? acento.main + " 2px"
                          : fuente[theme] + " 1px"),
                      width: "15px",
                      height: "15px",
                      borderRadius: "15px",
                    }}
                  ></div>
                  <div
                    onClick={() => changeTheme("light")}
                    style={{
                      background: fondo_principal.light,
                      border:
                        "solid " +
                        (theme === "light"
                          ? acento.light + " 2px"
                          : fuente[theme] + " 1px"),
                      width: "15px",
                      height: "15px",
                      borderRadius: "15px",
                    }}
                  ></div>
                  <div
                    onClick={() => changeTheme("dark")}
                    style={{
                      background: fondo_principal.dark,
                      border:
                        "solid " +
                        (theme === "dark"
                          ? acento.dark + " 2px"
                          : fuente[theme] + " 1px"),
                      width: "15px",
                      height: "15px",
                      borderRadius: "15px",
                    }}
                  ></div>
                </Box>
              </ListItem>
            </Box>
          </Drawer>

          {/* Rutas */}
          <Box
            component="section"
            sx={{
              minHeight: "85vh",
              mx: "5%",
              backgroundColor: fondo_principal[theme],
            }}
          >
            <Routes>
              <Route path="/" element={<Home posts={posts} />} />
              <Route
                path="/author/:authorName"
                element={<ArticlesByAuthor posts={posts} />}
              />
              <Route
                path="/filter/:filterType/:filterValue"
                element={<FilteredArticles posts={posts} />}
              />
              <Route
                path="/article/:slug"
                element={<Article posts={posts} />}
              />
            </Routes>
          </Box>
        </ThemeProvider>
      </Router>
      <Footer />
    </Box>
  );
};

export default App;
