import { HomePage } from "../components/HomePage";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { theme } from "./theme";


function Home(){
  return (
    <ThemeProvider theme={theme}>

    <HomePage/>
    </ThemeProvider>
  )
}

export default Home;