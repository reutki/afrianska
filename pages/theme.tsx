import { ThemeProvider, createTheme } from "@mui/material/styles";

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
    htmlFontSize: 16,
    fontFamily: '"Gilroy",sans-serif',
    body2: {
      letterSpacing: "0.05rem",
      fontWeight: "100",
    },
  },
});
