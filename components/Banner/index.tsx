import React from "react";
import { FC } from "react";
import Image from "next/image";
import { StyledBanner } from "./styled";
import { Typography, Box } from "@mui/material";

type Props = {
  title: string;
  description: string;
};

export const Banner: FC<Props> = ({ title, description }) => {
  return (
    <StyledBanner>
      <Box className="banner">
        <Box className="text">
          <Typography variant="h3" id="title">
            {title}
          </Typography>
          <Typography variant="body2" id="description">
            {description}
          </Typography>
        </Box>
        <Box className="title-image">
          <Image
            className="bubbles"
            src={"/Bubbles.svg"}
            layout="fill"
            alt="blue image with bubbles"
            objectFit="cover"
          />
        </Box>
      </Box>
    </StyledBanner>
  );
};
