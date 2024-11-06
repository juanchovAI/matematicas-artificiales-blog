const formatDate = (fecha: Date | string) => {
  const formattedDate = new Date(fecha);
  const day = String(formattedDate.getDate()).padStart(2, "0");
  const month = String(formattedDate.getMonth() + 1).padStart(2, "0");
  const year = String(formattedDate.getFullYear()).slice(-2);
  const formattedFecha = `${day}-${month}-${year}`;

  return formattedFecha;
};

export default formatDate;
