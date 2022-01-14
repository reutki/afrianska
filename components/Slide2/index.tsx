import React from "react";
import { CardMUI } from "../CardMUI";
import Image from "next/image";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";

import * as S from "./styled";

export const Slide2 = () => {
  return (
    <S.Main className="main">
      <S.Left className="left">
        <S.Title>
          <Typography variant="h3" color="primary">
            What we do to help our client grow in digital era
          </Typography>
        </S.Title>
        <CardMUI
          src={"/illustration-card2.svg"}
          height={"525px"}
          alt={"card1"}
          title={"Make Your Business To Be Better Famous In Internet"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
      </S.Left>
      <S.Right className="right">
        <CardMUI
          src={"/illustration-card1.svg"}
          width={"380"}
          height={"250"}
          alt={"card1"}
          title={"Bring Technology To Your Comfrotable Home"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <CardMUI
          src={"/illustration-card3.svg"}
          width={"380"}
          height={"250"}
          alt={"card1"}
          title={"Bring Technology To Your Comfrotable Home"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
      </S.Right>
    </S.Main>
  );
};
