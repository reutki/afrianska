import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Paper } from "@mui/material";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CardStyle, ImageContainer } from "./styled";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../pages/theme";
import { Props } from "./CardMUI.d";
import Image from "next/image";
import Link from "next/link";

export const CardMUI: React.FC<Props> = ({
  width,
  height,
  src,
  alt,
  title,
  description,
}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CardStyle>
          <Paper
            elevation={6}
            sx={{ maxWidth: "380px", maxHeight: "525px", padding: "48px" }}
          >
            <ImageContainer>
              <Image
                width="180px"
                height="130px"
                {...{ src, alt, title, description }}
              />
            </ImageContainer>
            <Typography
              sx={{ marginBottom: "16px" }}
              gutterBottom
              color="primary.dark"
              variant="h5"
            >
              {title}
            </Typography>
            <Typography
              sx={{ opacity: "0.6" }}
              color="primary.dark"
              variant="body2"
            >
              {description}
            </Typography>
            <Button href={"/blog"} color="secondary">
              Learn More
              <IconButton color="secondary">
                <ArrowForwardIcon color="secondary" />
              </IconButton>
            </Button>
          </Paper>
        </CardStyle>
      </ThemeProvider>
    </>
  );
};
