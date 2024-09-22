import { light } from '@mui/material/styles/createPalette';
import { Box, ThemeProvider, createTheme } from '@mui/system';


const themes = {

    light: createTheme({
        palette: {
          background: {
            paper: '#fff',
          },
          text: {
            primary: '#173A5E',
            secondary: '#46505A',
          },
          action: {
            active: '#001E3C',
          },
          success: {
            dark: '#009688',
          },
        },
      }),

    sepia:createTheme({
        palette: {
          background: {
            paper: '#fff',
          },
          text: {
            primary: '#173A5E',
            secondary: '#46505A',
          },
          action: {
            active: '#001E3C',
          },
          success: {
            dark: '#009688',
          },
        },
      }),
}