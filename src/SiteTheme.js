import { createTheme } from "@mui/material/styles";

const siteTheme = createTheme({
  palette: {
    primary: {
      main: '#5a6c7d',
      light: '#5e7ce2',
      dark: '#4a5866',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2c3e50',
      light: '#34495e',
      dark: '#1a252f',
      contrastText: '#ffffff',
    },
    background: {
      default: '#e8e8e8',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#5a6c7d',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    button: {
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.8,
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 2px 4px rgba(0,0,0,0.1)',
    '0 4px 6px rgba(0,0,0,0.1)',
    '0 6px 12px rgba(0,0,0,0.15)',
    '0 8px 16px rgba(0,0,0,0.15)',
    '0 10px 20px rgba(0,0,0,0.2)',
    '0 12px 24px rgba(0,0,0,0.2)',
    '0 16px 32px rgba(0,0,0,0.25)',
    '0 20px 40px rgba(0,0,0,0.25)',
    '0 24px 48px rgba(0,0,0,0.3)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '10px 28px',
          fontSize: '0.875rem',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 8px rgba(61, 90, 254, 0.4)',
          },
        },
        contained: {
          background: '#5a6c7d',
          '&:hover': {
            background: '#5a6c7d',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
  },
});

export default siteTheme;