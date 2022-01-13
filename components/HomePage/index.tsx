import React, { useRef } from "react";
import { Navbar } from "../navbar/Navbar";
import { Slide1 } from "../Slide1";
import { Slide2 } from "../Slide2";
import { Slide3 } from "../Slide3";
import { ClientComponent } from "../Clients";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <ClientComponent />
    </>
  );
};
