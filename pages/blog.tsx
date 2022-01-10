import { BlogPage } from "../components/Blog";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { theme } from "./theme";


function Blog(){
  return (
    <ThemeProvider theme={theme}>

    <BlogPage/>
    </ThemeProvider>
  )
}

export default Blog;