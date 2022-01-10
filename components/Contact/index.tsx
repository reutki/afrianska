import React from "react";
import Image from "next/image";
import {Link} from '@mui/material'
import { StyledContacts } from "./styled";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LanguageIcon from '@mui/icons-material/Language';
import { Typography } from "@mui/material";
import { ContactForm } from "../ContactForm";

export const ContactPage=()=>{

    return(
        <StyledContacts>
         <div className="container">
      <div className="left">
        <div className="image">

  <Image className="illustration" src={'/illustration-contact.svg'} objectFit="contain" layout="responsive" width={100} height={100} alt="person laying on a couch with a phone"/>
        </div>
      <div className="adress">
    <Typography variant="h5" color="primary.dark">ADRESS</Typography>
<Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>

      </div>
    <div className="phone">
    <Typography variant="h5" color="primary.dark">PHONE</Typography>

    <div className="phone1">

    <PhoneIcon color="disabled" /><Link underline="none" href="tel:+62-812-7313-4321">+62-812-7313-4321</Link>

    </div>
    <div className="phone2">
    <PhoneIcon color="disabled" />
    <Link underline="none" href="tel:+62-817-000-1234">+62-817-000-1234</Link>
    </div>

    </div>
    <div className="onlineService">
    <Typography variant="h5" color="primary.dark">ONLINE SERVICE</Typography>
    <div className="website">

    <LanguageIcon color="disabled" />
    <Link underline="hover" href="www.afrianska.com"> www.afrianska.com</Link>
    </div>
      
    
    <div className="email">
    <LocalPostOfficeIcon color="disabled" />
    <Link underline="none" href="mailto:hello.afrian@gmail.com">hello.afrian@gmail.com</Link>
    
    </div>
    </div>
      </div>
 <div className="right">
    <div id="form">
    <ContactForm/>

    </div>

 </div>
    </div>
        </StyledContacts>
    )
}