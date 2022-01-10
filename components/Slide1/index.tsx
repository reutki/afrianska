import React from "react";
import { Slide1Style } from "./styled";
import Image from "next/image";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Slide2 } from "../Slide2";

export const Slide1=()=>{
    const scrollDown = () => window.scrollTo({top:700, behavior:"smooth"});


    return(
        
        <Slide1Style>
        <div className="main">
            
            <div className="info">
            <Typography  variant="h2" id="title">New Automation Tool for Your Home</Typography>
            <Typography  variant="body2" id="comments">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.</Typography>
            <Button sx={{width:'15rem'}} onClick={scrollDown} size="large" disableElevation color="secondary" variant="contained" id="button">See Our Project</Button>
            </div>
            <div className="image">
            <Image id="photo"
            src="/illustration-main.svg"
            alt="main image"
            layout="responsive"
            width={50}
            height={50}
            
            />
            </div>
            

        </div>
        </Slide1Style>
    )
}