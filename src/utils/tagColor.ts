const tagColour = (tag: string) => {
  switch (tag) {
    case "Matemáticas":
      return "#FFB0B0";
    case "Datos":
      return "#B0FFB0";
    case "Inteligencia Artificial":
      return "#B0B0FF";
    default:
      return "#FFB0FF";
  }
};

export default tagColour;
