import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";

export default function HomeCard({ imgUrl, title, resumen, id, autor }) {
  return (
    <Card key={id} sx={{ maxWidth: 345, borderRadius: "15px", height: 370 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgUrl}
          alt="green iguana"
          style={{ padding: 0 }}
        />{" "}
        <CardContent>
          <h2 style={{ fontFamily: "titulos" }}>{title}</h2>

          <p>{resumen}</p>
          <p>
            <strong>Autor:</strong> {autor}
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
