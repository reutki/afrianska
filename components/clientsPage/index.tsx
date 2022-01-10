import React from "react";
import { Divider } from "@mui/material";
import Image from "next/image";
import { Footer } from "../Footer";
import { StyledClientPage } from "./styled";
import { Clients } from "../clientsTable";

export const ClientPage =()=>{
return(
    <StyledClientPage>

    <div className="container">
        <div className="info">
            <div className="title"><h1>Our Beloved Client</h1></div>
            <div className="comments"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum, quasi eius officiis asperiores quibusdam suscipit impedit nulla, tempora sed perspiciatis exercitationem adipisci optio? Saepe nam rerum earum consectetur libero.</p>
        </div>


    </div>
    <div className="clientsTable">
    <Clients/>
    </div>
        <div className="footer">
            <Footer/>
        </div>
    </div> 
    </StyledClientPage>
)

}