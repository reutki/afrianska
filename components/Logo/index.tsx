import React from "react";
import Image from "next/image";


export const Logo=(props)=>{

    return(
        <Image src={props.image} alt={props.alt}/>
    )
}