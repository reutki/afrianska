import React from "react";
import Image from "next/image";
import { Box, Paper, Typography } from "@mui/material";
import { Slide3Style } from "./styled";
export const Slide3 = () => {
  return (
    <Slide3Style>
      <Box className="main">
        <Box className="info">
          <Box className="title">
            <Typography variant="h3" color="primary.dark">
              Our Finished Project
            </Typography>
          </Box>
          <Box className="comment">
            <Typography variant="body2" color="primary.dark">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Typography>
          </Box>
        </Box>
        <Box className="boxes">
          <Box className="BoxTop">
            <Paper sx={{ width: "940px", height: "200px" }} elevation={3}>
              <Typography variant="h4" align="right" id="textTop">
                Smart Home Installation
              </Typography>
              <Typography variant="h6" align="right" id="textBottom">
                In Muarakana Housing Estate
              </Typography>
              <Box className="cover">
                <Image
                  id="image"
                  src={"/image-office.png"}
                  alt="an image of an office"
                  layout="responsive"
                  height={30}
                  width={70}
                />
              </Box>
            </Paper>
          </Box>

          <Box className="boxDown">
            <Paper sx={{ width: "420px" }} elevation={3}>
              <Typography variant="h5" id="text">
                Sparklite App
              </Typography>
              <Box className="cover">
                <Image
                  id="image"
                  src={"/sparklite-app.png"}
                  alt="an image of an office"
                  layout="responsive"
                  height={30}
                  width={30}
                />
              </Box>
            </Paper>
            <Paper sx={{ width: "420px" }} elevation={3}>
              <Typography variant="h5" id="text">
                Car-Repetition App
              </Typography>
              <Box className="cover">
                <Image
                  id="image"
                  src={"/car-repetition app.png"}
                  alt="an image of an office"
                  layout="responsive"
                  height={30}
                  width={30}
                />
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Slide3Style>
  );
};
