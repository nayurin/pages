import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#1976d2'
        },
        secondary: {
          main: '#dc004e',
        },
        background: {
          default: 'hsl(0 0% 95%)',
          paper: '#ffffff'
        }
      }
    },
    dark: {
      palette: {
        background: {
          default: 'rgb(5, 30, 52)',
          paper: '#21232c'
        }
      }
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Geist',
      '"Segoe UI"',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      '"Open Sans"',
      '"Helvetica Neue"',
      'sans-serif'
    ].join(','),
  }
});
