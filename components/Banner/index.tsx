import React from "react";
import Image from "next/image";
import { StyledBanner } from "./styled"; 
import { Typography } from "@mui/material";



export const Banner=(props)=>{
return(
    <StyledBanner>
    <div className="banner">
    <div className="text">
    <Typography variant="h3" id="title">{props.title}</Typography>
    <Typography variant="body2" id="description">{props.description}</Typography>

    </div>
    <div className="title-image">
<Image className="bubbles" src={'/Bubbles.svg'} layout="fill" alt="blue image with bubbles" objectFit="cover"/>

    </div>
</div>
    </StyledBanner>
)


}