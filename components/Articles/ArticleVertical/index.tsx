import React, { FC } from "react";
import { Box, Button, Icon, IconButton, Typography } from "@mui/material";
import { Props } from "../Article.d";
import Image from "next/image";
import ShareIcon from "@mui/icons-material/Share";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { ArticleVerticalStyle } from "./styled";

export const ArticleVertical: React.FC<Props> = ({
  src,
  alt,
  title,
  description,
  date,
  readTime,
  author,
}) => {
  return (
    <ArticleVerticalStyle>
      <Box className="container2">
        <Box className="image" sx={{ paddingBottom: "1rem" }}>
          <Image
            width={"100%"}
            height={"80%"}
            layout="responsive"
            {...{ src, alt }}
          />
        </Box>
        <Box className="text">
          <Box className="text-main">
            <Typography variant="h5" fontWeight={600} color={"primary.dark"}>
              {title}
            </Typography>
            <Box>
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
                  {date}, {readTime} read
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
      </Box>
    </ArticleVerticalStyle>
  );
};
