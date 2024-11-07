import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import formatDate from "../utils/formatDate";
import tagColour from "../utils/tagColor";

interface HomeCardProps {
  imgUrl: string;
  title: string;
  resumen: string;
  autor: string;
  id: string;
  fecha: string;
  categoria: [string];
}

const HomeCard: React.FC<HomeCardProps> = ({
  imgUrl,
  title,
  resumen,
  autor,
  id,
  fecha,
  categoria,
}) => {
  const formattedFecha = formatDate(fecha);

  return (
    <Card sx={{ maxWidth: "20rem", minHeight: "24rem" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgUrl}
          alt="green iguana"
          style={{ padding: 0 }}
        />
        <CardContent>
          <Box sx={{ marginTop: "-30px" }}>
            {categoria.map((cat) => (
              <Box
                key={cat}
                sx={{
                  backgroundColor: tagColour(cat),
                  color: "#0B192C",
                  padding: "0.2rem 1rem",
                  borderRadius: "0.2rem",
                  display: "inline-block",
                  marginBottom: "0.5rem",
                }}
              >
                {cat}
              </Box>
            ))}
          </Box>
          <h2 style={{ fontFamily: "titulos" }}>{title}</h2>
          <Typography>{resumen}</Typography>
          <Box
            sx={{
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
              <CreateOutlinedIcon sx={{ width: "20px" }} /> {autor}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
              <CalendarMonthOutlinedIcon sx={{ width: "20px" }} />{" "}
              {formattedFecha}
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HomeCard;
