import React from "react";
import { FooterStyle } from "./styled";
import { Box, Button, IconButton, Link, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../pages/theme";
import { Divider } from "@mui/material";
import { SvgIcon } from "@mui/material";
import { Logo } from "../Logo";
import Image from "next/image";
export const Footer = () => {
  function link() {
    <Link href="/contact" />;
  }
  return (
    <FooterStyle>
      <Box className="main" color={"white"}>
        <Box
          sx={{
            paddingTop: "5rem",
            paddingBottom: "5rem",
            paddingInline: "10%",
          }}
          className="top"
        >
          <Box className="left">
            <Typography
              variant="h4"
              sx={{ width: "20rem", paddingBottom: "2rem" }}
            >
              Interested to work with our team?
            </Typography>
            <Typography
              sx={{ width: "30rem", opacity: 0.5 }}
              variant="body2"
              color="white"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              blanditiis expedita iste temporibus consequatur atque fugit,
              deserunt omnis eligendi, asperiores repudiandae unde ex ducimus
              perferendis sunt in at ea vitae.
            </Typography>
          </Box>
          <Box sx={{ alignItems: "center", display: "flex" }} className="right">
            <Button variant="contained" color="secondary">
              Let&apos;s Talk
            </Button>
          </Box>
        </Box>
        <Box sx={{ paddingBottom: "5rem", width: "80%" }}>
          <Divider
            variant="fullWidth"
            orientation="horizontal"
            color="secondary"
            sx={{ backgroundColor: "white", opacity: "50%" }}
          />
        </Box>
        <Box
          sx={{ paddingBottom: "5rem", paddingInline: "10%" }}
          className="bottom"
        >
          <Box className="column1">
            <Box sx={{ display: "flex", paddingBottom: "2rem" }}>
              <Box
                sx={{ display: "block", width: "2rem", paddingRight: "0.8rem" }}
                className="logo"
              >
                <Image
                  objectFit="contain"
                  className="image"
                  src={"/logo-light.svg"}
                  alt="logo afrianska"
                  layout="responsive"
                  width={"1rem"}
                  height={"1rem"}
                />
              </Box>
              <Typography variant="h5" fontWeight={600}>
                Afrianska
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ paddingRight: "1rem" }}>A.</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ paddingRight: "1rem" }}>T.</Typography>
                <Link
                  underline="hover"
                  color={"white"}
                  href="tel:+62-812-7313-4321"
                >
                  <Typography variant="body2">+62-812-7313-4321</Typography>
                </Link>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ paddingRight: "1rem" }}>E.</Typography>
                <Link
                  underline="hover"
                  color={"white"}
                  href="mailto:hello.afrian@gmail.com"
                >
                  <Typography variant="body2">
                    hello.afrian@gmail.com
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="column2">
            <Box sx={{ paddingBottom: "2rem" }}>
              <Typography variant="h5" fontWeight={600}>
                About Us
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Link underline="hover" color={"white"}>
                <Typography variant="body2" color={"white"}>
                  About
                </Typography>
              </Link>
              <Link underline="hover" color={"white"}>
                <Typography variant="body2" color={"white"}>
                  What We Do
                </Typography>
              </Link>
              <Link underline="hover" color={"white"}>
                <Typography variant="body2" color={"white"}>
                  Project
                </Typography>
              </Link>
              <Link underline="hover" color={"white"}>
                <Typography variant="body2" color={"white"}>
                  How It Works With Us
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box className="column3">
            <Box sx={{ paddingBottom: "2rem" }}>
              <Typography variant="h5" fontWeight={600}>
                Follow Us
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Link
                underline="hover"
                color={"white"}
                href="https://www.instagram.com/"
                target="_blank"
              >
                <Typography variant="body2" color={"white"}>
                  Instagram
                </Typography>
              </Link>
              <Link
                underline="hover"
                color={"white"}
                href="https://www.facebook.com/"
                target="_blank"
              >
                <Typography variant="body2" color={"white"}>
                  Facebook
                </Typography>
              </Link>
              <Link
                underline="hover"
                color={"white"}
                href="https://www.linkedin.com"
                target="_blank"
              >
                <Typography variant="body2" color={"white"}>
                  Linkedin
                </Typography>
              </Link>
              <Link
                underline="hover"
                color={"white"}
                href="https://www.youtube.com"
                target="_blank"
              >
                <Typography variant="body2" color={"white"}>
                  Youtube
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
        <Typography
          variant="body2"
          sx={{ opacity: 0.4, marginLeft: "10%", paddingBottom: "2rem" }}
        >
          2019 © Afrianska. All rights reserved.
        </Typography>
      </Box>
    </FooterStyle>
  );
};
