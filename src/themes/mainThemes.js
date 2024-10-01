import { createTheme } from "@mui/material/styles";
import SugoProClassicRegulartrial from "../assets/fonts/Sugo-Pro-Classic-Regular-trial.ttf";

export const primary = {
  main: "#005247",
  light: "#005247",
  dark: "#ffe9d0",
};

export const secondary = {
  main: "#976847",
  light: "#976847",
  dark: "#c4fcf1",
};
export const acento = {
  main: "#f48b38",
  light: "#f48b38",
  dark: "#f48b38",
};

export const fondo_principal = {
  main: "#EADBCB",
  light: "white",
  dark: "#022034",
};
export const fondo_componentes = {
  main: "#005247",
  light: "#005247",
  dark: "#ffe9d0",
};
export const fuente = {
  main: "#3a2823",
  light: "#3a2823",
  dark: "#ffe9d0",
};

export const light_theme = createTheme({
  typography: {
    titulo: {
      lineHeight: 1.1,
      fontFamily: "Titulos",
      color: fuente.light,
      textDecoration: "underline 5px" + acento.light,
      fontSize: "2rem",

      "@media (min-width:600px)": {
        fontSize: "3.52rem",
      },
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
            font-family: "Titulos";
            src: local('Titulos'), local('Titulos'), url(${SugoProClassicRegulartrial}) format('ttf')
            format("truetype");
            font-weight: normal;
            font-style: normal;
        }
      `,
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          titulo: "h1",
        },
      },
    },
  },
});

export const main_theme = createTheme({
  typography: {
    titulo: {
      lineHeight: 1.1,
      fontFamily: "Titulos",
      color: fuente.main,
      textDecoration: "underline 5px" + acento.main,
      fontSize: "2rem",

      "@media (min-width:600px)": {
        fontSize: "3.52rem",
      },
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
              font-family: "Titulos";
              src: local('Titulos'), local('Titulos'), url(${SugoProClassicRegulartrial}) format('ttf')
              format("truetype");
              font-weight: normal;
              font-style: normal;
          }
        `,
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          titulo: "h1",
        },
      },
    },
  },
});

export const dark_theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    titulo: {
      lineHeight: 1.1,
      fontFamily: "Titulos",
      color: fuente.dark,
      textDecoration: "underline 5px" + acento.main,
      fontSize: "2rem",

      "@media (min-width:600px)": {
        fontSize: "3.52rem",
      },
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
                font-family: "Titulos";
                src: local('Titulos'), local('Titulos'), url(${SugoProClassicRegulartrial}) format('ttf')
                format("truetype");
                font-weight: normal;
                font-style: normal;
            }
          `,
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          titulo: "h1",
        },
      },
    },
  },
});
