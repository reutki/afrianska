import React from "react";
import Image from "next/image";
import { Paper, Typography } from "@mui/material";
import { Slide3Style } from "./styled";
export const Slide3 = () => {
  return (
    <Slide3Style>
      <div className="main">
        <div className="info">
          <div className="title">
            <Typography variant="h4" color="primary.dark" fontWeight={600}>
              Our Finished Project
            </Typography>
          </div>
          <div className="comment">
            <Typography variant="body2" color="primary.dark">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Typography>
          </div>
        </div>
        <div className="boxes">
          <div className="BoxTop">
            <Paper sx={{ width: "60rem", height: "30%" }} elevation={3}>
              <Typography variant="h4" id="textTop">
                Smart Home Installation
              </Typography>
              <Typography variant="h6" id="textBottom">
                In Muarakana Housing Estate
              </Typography>
              <div className="cover">
                <Image
                  id="image"
                  src={"/image-office.png"}
                  alt="an image of an office"
                  layout="responsive"
                  height={30}
                  width={70}
                />
              </div>
            </Paper>
          </div>

          <div className="boxDown">
            <Paper sx={{ width: "50rem" }} elevation={3}>
              <Typography variant="h5" id="text">
                Sparklite App
              </Typography>
              <div className="cover">
                <Image
                  id="image"
                  src={"/sparklite-app.png"}
                  alt="an image of an office"
                  layout="responsive"
                  height={30}
                  width={30}
                />
              </div>
            </Paper>
            <Paper sx={{ width: "50rem" }} elevation={3}>
              <Typography variant="h5" id="text">
                Car-Repetition App
              </Typography>
              <div className="cover">
                <Image
                  id="image"
                  src={"/car-repetition app.png"}
                  alt="an image of an office"
                  layout="responsive"
                  height={30}
                  width={30}
                />
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </Slide3Style>
  );
};
