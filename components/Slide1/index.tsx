import React from "react";
import { Background, Grid, Text, Left, Right } from "./styled";
import Image from "next/image";
import { Box, Button, Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Slide2 } from "../Slide2";

export const Slide1 = () => {
  const scrollDown = () => window.scrollTo({ top: 700, behavior: "smooth" });

  return (
    <>
      <Background>
        <Container sx={{ marginTop: "5vh", paddingBottom: "180px" }} fixed>
          <Grid>
            <Left>
              <Text>
                <Typography variant="h1" color={"primary.dark"}>
                  New Automation Tool for Your Home
                </Typography>
                <Typography
                  variant="body1"
                  color={"primary.dark"}
                  sx={{ opacity: "0.6" }}
                  id="comments"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus tristique vulputate ultrices ut mauris tellus at.
                  Posuere sollicitudin odio tellus elit.
                </Typography>
              </Text>
              <Button
                sx={{ width: "220px" }}
                onClick={scrollDown}
                size="large"
                disableElevation
                color="secondary"
                variant="contained"
                id="button"
              >
                See Our Project
              </Button>
            </Left>
            <Right>
              <Box className="image">
                <Image
                  id="photo"
                  src="/illustration-main.svg"
                  alt="main image"
                  layout="responsive"
                  width={50}
                  height={50}
                />
              </Box>
            </Right>
          </Grid>
        </Container>
      </Background>
    </>
  );
};
