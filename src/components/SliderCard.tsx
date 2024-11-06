import React from "react";
import { Box, Typography } from "@mui/material";
import { acento, fondo_principal, fuente } from "../themes/mainThemes";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import formatDate from "../utils/formatDate";
import tagColour from "../utils/tagColor";
import { Link } from "react-router-dom";

interface SliderCardProps {
  title: string;

  autor: string;

  imgUrl: string;

  id: string;

  fecha: string;

  categoria: [string];
  theme: string;
  resumen: string;
  slug: string;
}

const SliderCard: React.FC<SliderCardProps> = ({
  title,
  autor,
  imgUrl,
  id,
  fecha,
  categoria,
  theme,
  resumen,
  slug,
}) => {
  return (
    <Link
      to={`/article/${slug}`}
      style={{ textDecoration: "none", color: fuente[theme] }}
    >
      <Box
        className="image-header"
        sx={{
          backgroundImage: "url(" + imgUrl + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "50%",
          width: "95%",
          height: "20rem",
        }}
      >
        <Box
          sx={{
            background: fondo_principal[theme],
            width: "40%",
            borderTopLeftRadius: "15px",
            padding: "10px",
            borderBottomRightRadius: "15px",
            border: `2px solid ${acento[theme]}`,
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontFamily: "titulos", color: acento[theme] }}
          >
            {title}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              mb: "0.5rem",
            }}
          >
            <CalendarMonthOutlinedIcon
              sx={{ width: "15px", mt: "-5px", color: fuente[theme] }}
            />
            <Typography>{formatDate(fecha)}</Typography>
            <BookmarkBorderOutlinedIcon
              sx={{
                width: "15px",

                mt: "-5px",
                mr: "-0.4rem",
                ml: "1rem",
                color: fuente[theme],
              }}
            />
            {categoria.map((cat) => (
              <Box
                key={cat}
                sx={{
                  backgroundColor: tagColour(cat),
                  color: "#0B192C",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "0.2rem",
                  display: "inline-block",
                  marginBottom: "0.5rem",
                }}
              >
                {cat}
              </Box>
            ))}
          </Box>
          <Typography sx={{}}>{resumen}</Typography>

          <Typography sx={{ textAlign: "end", mb: "1.5rem" }}>
            {autor}
          </Typography>

          <Typography sx={{}}>{"🔍 Ver más ->"}</Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default SliderCard;
