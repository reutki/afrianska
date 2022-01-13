import React from "react";
import { Navbar } from "../navbar/Navbar";
import Image from "next/image";
import { StyleBlog } from "./styled";
import { SearchBar } from "../Searchbar";
import { Banner } from "../Banner";
import { ArticleMain } from "../Articles/ArticleMain";
import { ArticleHorizontal } from "../Articles/ArticleHorizontal";
import { ArticleVertical } from "../Articles/ArticleVertical";
import { Box } from "@mui/system";
export const BlogPage = () => {
  return (
    <StyleBlog>
      <Navbar />
      <Banner
        title="Blog Afrianska"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit fugit rerum distinctio praesentium sit? Accusantium iure, quisquam hic ipsam error non expedita"
      />
      <Box className="container">
        <Box className="searchbar">
          <SearchBar />
        </Box>

        <Box className="popular"></Box>
        <Box className="articles">
          <ArticleMain
            src="/article-image.png"
            alt="image of a house"
            title="Feugiat sodales at nullam tellus."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi posuere nibh tempor fringilla porta pellentesque ipsum."
            date="May 5"
            readTime="3 min"
            author="Samatha Leuthex"
          />
          {/* <ArticleHorizontal /> */}
          <ArticleVertical
            src="/article-image2.png"
            alt="image of a house"
            title="Feugiat sodales at nullam tellus."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi posuere nibh tempor fringilla porta pellentesque ipsum."
            date="May 5"
            readTime="3 min"
            author="Samatha Leuthex"
          />
        </Box>
        <div className="navigation"></div>
        <div className="footer"></div>
      </Box>
    </StyleBlog>
  );
};
