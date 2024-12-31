import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', // Replace with your primary color
    },
    secondary: {
      main: '#6c757d', // Replace with your secondary color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  spacing: 4, // Default spacing multiplier (4px)
});

export default theme;
