import React from "react";
import { FC } from "react";
import Image from "next/image";
import { StyledBanner } from "./styled";
import { Typography } from "@mui/material";

type Props = {
  title: string;
  description: string;
};

export const Banner: FC<Props> = ({ title, description }) => {
  return (
    <StyledBanner>
      <div className="banner">
        <div className="text">
          <Typography variant="h3" id="title">
            {title}
          </Typography>
          <Typography variant="body2" id="description">
            {description}
          </Typography>
        </div>
        <div className="title-image">
          <Image
            className="bubbles"
            src={"/Bubbles.svg"}
            layout="fill"
            alt="blue image with bubbles"
            objectFit="cover"
          />
        </div>
      </div>
    </StyledBanner>
  );
};
