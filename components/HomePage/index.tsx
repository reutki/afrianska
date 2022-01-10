import React, { useRef } from "react";
import { Navbar } from "../navbar/Navbar";
import { Slide1 } from "../Slide1";
import { Slide2 } from "../Slide2";
import { Slide3 } from "../Slide3";
import { Footer } from "../Footer";
import { ClientPage } from "../clientsPage";
import { HomeStyle } from "./styled";
import { useWindowScroll } from "react-use";

// ==============================================================================
//                          Script Scroll to specified Div
// const scrollDown = () => window.scrollTo({top: ,behavior:"smooth"});



// ==============================================================================

export const HomePage=()=>{
    return(
        <HomeStyle>

        <div id="navbar">

            <Navbar/>
        </div>
        <div className="body">
            <div>
            <Slide1 />
                
            </div>
            <div className="section2">
            <Slide2/>

            </div>
            <div>
            <Slide3/>

            </div>
            <div>
            <ClientPage />

            </div>
           
            
            


        </div>
        </HomeStyle>
    )
}