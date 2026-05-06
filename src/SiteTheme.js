import { createTheme } from "@mui/material/styles";

const siteTheme = createTheme({
  palette: {
    primary: {
      main: '#3d5afe',
      light: '#7b8fff',
      dark: '#2541c9',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2c3e50',
      light: '#3d5166',
      dark: '#1a252f',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f0f2f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a202c',
      secondary: '#5a6c7d',
    },
    divider: 'rgba(0,0,0,0.08)',
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 800,
      fontSize: '2.75rem',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.125rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.75rem',
      lineHeight: 1.3,
      letterSpacing: '-0.005em',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.4rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.05rem',
      lineHeight: 1.8,
    },
    body2: {
      fontSize: '0.9rem',
      lineHeight: 1.65,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 10,
  },
  shadows: [
    'none',
    '0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.05)',
    '0 3px 6px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.05)',
    '0 8px 15px rgba(0,0,0,0.07), 0 3px 6px rgba(0,0,0,0.05)',
    '0 15px 25px rgba(0,0,0,0.08), 0 5px 10px rgba(0,0,0,0.04)',
    '0 20px 40px rgba(0,0,0,0.10)',
    '0 24px 48px rgba(0,0,0,0.12)',
    '0 28px 56px rgba(0,0,0,0.14)',
    '0 32px 64px rgba(0,0,0,0.16)',
    '0 36px 72px rgba(0,0,0,0.18)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '9px 22px',
          fontSize: '0.9rem',
          fontWeight: 600,
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        contained: {
          boxShadow: '0 2px 6px rgba(61,90,254,0.28)',
          '&:hover': {
            boxShadow: '0 6px 16px rgba(61,90,254,0.38)',
          },
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': {
            borderWidth: '1.5px',
          },
        },
        sizeLarge: {
          padding: '11px 28px',
          fontSize: '0.95rem',
          borderRadius: 10,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '1px solid rgba(0,0,0,0.07)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 16px 32px rgba(0,0,0,0.13)',
          },
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          transition: 'transform 0.35s ease',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: '0.8rem',
          borderRadius: 6,
        },
      },
    },
  },
});

export default siteTheme;
