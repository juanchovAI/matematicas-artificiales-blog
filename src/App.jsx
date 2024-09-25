import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import { createClient } from "contentful";
import Home from "./pages/Home";
import ArticlesByAuthor from "./pages/ArticlesByAuthor";
import FilteredArticles from "./pages/FilteredArticles";
import Article from "./pages/Article";
import Footer from "./components/Footer";

import logo_principal from "./assets/logo_principal.png";
import "./App.css";

import Box from "@mui/material/Box";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "articulo" })
      .then((response) => setPosts(response.items))
      .catch(console.error);
  }, []);

  return (
    <Router>
      <Box
        component="section"
        sx={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "20%",
          px: "5%",
        }}
      >
        <img
          src={logo_principal}
          className="logo"
          alt="Logo principal de la app matemáticas artificiales"
          style={{ margin: 0 }}
        />

        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/author/Sebastian-Vargas"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Sobre el autor
          </NavLink>
          <NavLink
            to="/filter/category/Matemáticas"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contacto
          </NavLink>
        </nav>
      </Box>

      <Box component="section" sx={{ minHeighteight: "85%", mx: "5%" }}>
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
          <Route path="/article/:slug" element={<Article posts={posts} />} />
        </Routes>
      </Box>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;
