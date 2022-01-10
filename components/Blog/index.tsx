import React from "react";
import { Navbar } from "../navbar/Navbar";
import Image from "next/image";
import {StyleBlog} from './styled'
import { SearchBar } from "../Searchbar";
import { Banner } from "../Banner";
export const BlogPage=()=>{
    return(
        <StyleBlog>
        <Navbar/>
        <Banner title="Blog Afrianska" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit fugit rerum distinctio praesentium sit? Accusantium iure, quisquam hic ipsam error non expedita"/>
        <div className="container"
        >
        <div className="searchbar">
             <SearchBar/>
        </div>

        <div className="popular">

        </div>
        <div className="articles">

        </div>
        <div className="navigation">

        </div>
        <div className="footer">

        </div>
        </div>
        </StyleBlog>
        
    )
}