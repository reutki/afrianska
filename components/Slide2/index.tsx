import React from "react";
import { Slide2Style } from "./styled";
import Image from "next/image";
import { Button } from "@mui/material";
import { CardMUI } from "../CardMUI";
import { Typography } from "@mui/material";
export const Slide2=()=>{
    return(
        <Slide2Style>
        <div className="main">
            <div className="left">
        <div className="title">
            <Typography variant="h4" fontWeight={500} color="primary" id="text">What we do to help our client grow in digital era</Typography>
            </div>
        <CardMUI src={"/illustration-card2.svg"}  width={'380'} height={'250'}  alt={'card1'} title={'Make Your Business To Be Better Famous In Internet'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />

            </div>
           <div className="right">
             
               <CardMUI src={"/illustration-card1.svg"}   width={'380'} height={'250'}  alt={'card1'} title={'Bring Technology To Your Comfrotable Home'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
               <CardMUI src={"/illustration-card3.svg"}   width={'380'} height={'250'}  alt={'card1'} title={'Bring Technology To Your Comfrotable Home'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
           </div>
           

        </div>
        </Slide2Style>
    )
}