import { ThemeProvider, createTheme } from "@mui/material/styles";

const breakpoints = {
  xs: 0,
  sm: 592,
  md: 980,
  lg: 980,
  xl: 1200,
  xxl: 1480,
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#316099",
      light: "#5A98D0",
      dark: "#1F3F68",
    },
    secondary: {
      main: "#5A98D0",
    },
  },
  typography: {
    fontFamily: '"Gilroy",sans-serif',
    h1: {
      fontSize: "64px",
      fontFamily: "Galien",
      lineHeight: "74px",
    },
    h3: {
      fontSize: "36px",
      lineHeight: "46px",
      letterSpacing: "5%",
    },
    h4: {
      fontSize: "36px",
      lineHeight: "46px",
      letterSpacing: "5%",
    },
    h5: {
      fontSize: "20px",
      lineHeight: "30px",
      letterSpacing: "5%",
    },
    body1: {
      fontSize: "16px",
      lineHeight: "26px",
      letterSpacing: "5%",
    },
    body2: {
      letterSpacing: "0.05rem",
      fontWeight: "100",
    },
  },
  breakpoints: {
    values: { ...breakpoints },
  },
});
