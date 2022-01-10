import { ContactPage } from "../components/Contact";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { theme } from "./theme";
import { Banner } from "../components/Banner";
import { Navbar } from "../components/navbar/Navbar";
import { StyledContacts } from "../components/Contact/styled";
import Image from "next/image";
import {Link} from '@mui/material'
import { Style } from "../components/clientsTable/styled";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LanguageIcon from '@mui/icons-material/Language';
import MyMap from "../components/Map";
import { Footer } from "../components/Footer";

function Contact(){
  return (
    <StyledContacts>

    <ThemeProvider theme={theme}>
     <Navbar/>
      <div id="body">

      <Banner title="Contact Us" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
    <ContactPage/>
    <MyMap/>
    <Footer/>
      </div>
    
    </ThemeProvider>
    </StyledContacts>
  )
}

export default Contact;