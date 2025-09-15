import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#2d3748',
      secondary: '#4a5568',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
      color: '#4a5568',
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#718096',
    },
  },
  spacing: 8, // 8px base spacing
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 0 0 1px rgba(255, 255, 255, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    '0 0 0 1px rgba(255, 255, 255, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    '0 0 0 1px rgba(255, 255, 255, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    '0 0 0 1px rgba(255, 255, 255, 0.05), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '0 0 0 1px rgba(255, 255, 255, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 0 0 1px rgba(255, 255, 255, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 0 0 1px rgba(255, 255, 255, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 0 0 1px rgba(255, 255, 255, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 0 0 1px rgba(255, 255, 255, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 0 0 1px rgba(255, 255, 255, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 0 0 1px rgba(255, 255, 255, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 0 0 1px rgba(255, 255, 255, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 0 0 1px rgba(255, 255, 255, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 0 0 1px rgba(255, 255, 255, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 0 0 1px rgba(255, 255, 255, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 0 0 1px rgba(255, 255, 255, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 0 0 1px rgba(255, 255, 255, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 0 0 1px rgba(255, 255, 255, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 0 0 1px rgba(255, 255, 255, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  ],
});

export default theme;
