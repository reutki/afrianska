import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Paper } from "@mui/material";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CardStyle } from "./styled";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../pages/theme";
import { Props } from "./CardMUI.d";
import Image from "next/image";

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
          <Paper elevation={6} sx={{ maxWidth: "380px", padding: "48px" }}>
            <Image
              width="100px"
              {...{ height, src, alt, title, description }}
            />
            <Typography
              sx={{ marginLeft: "" }}
              gutterBottom
              color="primary.dark"
              variant="h5"
            >
              {title}
            </Typography>
            <Typography gutterBottom color="primary.dark" variant="body2">
              {description}
            </Typography>
            <Button color="secondary">
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
