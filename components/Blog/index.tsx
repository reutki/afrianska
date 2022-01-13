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
import { Footer } from "../Footer";
import { Button, Divider, Typography } from "@mui/material";
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

        <Box className="popular" sx={{ paddingTop: "2rem" }}>
          <Typography variant="h5" color={"primary.light"}>
            Popular
          </Typography>
        </Box>
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
          <Box className="popularVertical">
            <ArticleVertical
              src="/article-image2.png"
              alt="image of a house"
              title="Feugiat sodales at nullam tellus."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi posuere nibh tempor fringilla porta pellentesque ipsum."
              date="May 5"
              readTime="3 min"
              author="Samatha Leuthex"
            />
            <ArticleVertical
              src="/article-image3.png"
              alt="image of a house"
              title="Feugiat sodales at nullam tellus."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi posuere nibh tempor fringilla porta pellentesque ipsum."
              date="May 5"
              readTime="3 min"
              author="Samatha Leuthex"
            />
            <ArticleVertical
              src="/article-image4.png"
              alt="image of a house"
              title="Feugiat sodales at nullam tellus."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi posuere nibh tempor fringilla porta pellentesque ipsum."
              date="May 5"
              readTime="3 min"
              author="Samatha Leuthex"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "self-end", width: "100%" }}>
            <Button>See All Popular Article</Button>
          </Box>
          <Divider fullWidth />
          <Box className="allArticle">
            <Box className="popular" sx={{ paddingTop: "2rem" }}>
              <Typography variant="h5" color={"primary.light"}>
                All Article
              </Typography>
            </Box>
            <ArticleHorizontal
              src="/article-image5.png"
              alt="image of a house"
              title="Feugiat sodales at nullam tellus."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi posuere nibh tempor fringilla porta pellentesque ipsum."
              date="May 5"
              readTime="3 min"
              author="Samatha Leuthex"
            />
            <ArticleHorizontal
              src="/article-image6.png"
              alt="image of a house"
              title="Feugiat sodales at nullam tellus."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi posuere nibh tempor fringilla porta pellentesque ipsum."
              date="May 5"
              readTime="3 min"
              author="Samatha Leuthex"
            />
            <ArticleHorizontal
              src="/article-image7.png"
              alt="image of a house"
              title="Feugiat sodales at nullam tellus."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi posuere nibh tempor fringilla porta pellentesque ipsum."
              date="May 5"
              readTime="3 min"
              author="Samatha Leuthex"
            />
            <ArticleHorizontal
              src="/article-image8.png"
              alt="image of a house"
              title="Feugiat sodales at nullam tellus."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi posuere nibh tempor fringilla porta pellentesque ipsum."
              date="May 5"
              readTime="3 min"
              author="Samatha Leuthex"
            />
            <ArticleHorizontal
              src="/article-image9.png"
              alt="image of a house"
              title="Feugiat sodales at nullam tellus."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi posuere nibh tempor fringilla porta pellentesque ipsum."
              date="May 5"
              readTime="3 min"
              author="Samatha Leuthex"
            />
          </Box>
        </Box>
        <div className="navigation"></div>
      </Box>
      <Footer />
    </StyleBlog>
  );
};
