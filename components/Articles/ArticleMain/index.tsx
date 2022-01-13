import React, { FC } from "react";
import { Box, Button, Icon, IconButton, Typography } from "@mui/material";
import { Props } from "../Article.d";
import Image from "next/image";
import ShareIcon from "@mui/icons-material/Share";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { ArticleStyle } from "./styled";

export const ArticleMain: React.FC<Props> = ({
  src,
  alt,
  title,
  description,
  date,
  readTime,
  author,
}) => {
  return (
    <ArticleStyle>
      <Box className="container2">
        <Box className="grid">
          <Box className="text">
            <Box className="text-main">
              <Typography variant="h3" fontWeight={600} color={"primary.dark"}>
                {title}
              </Typography>
              <Box sx={{ paddingRight: "2%" }}>
                <Typography variant="body2" color={"primary.dark"}>
                  {description}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box className="info">
                <Box className="details">
                  <Typography variant="body1" color={"primary"}>
                    {author}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: "0.4" }}>
                    {date},{readTime} read
                  </Typography>
                </Box>
                <Box className="buttons">
                  <IconButton className="share">
                    <BookmarksIcon />
                  </IconButton>
                  <IconButton className="save">
                    <ShareIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="image">
            <Image
              width={"100%"}
              height={"100%"}
              layout="responsive"
              {...{ src, alt }}
            />
          </Box>
        </Box>
      </Box>
    </ArticleStyle>
  );
};
