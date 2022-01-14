import React from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavbarStyle } from "./styled";

export const Navbar = () => {
  return (
    <NavbarStyle>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          style={{ backgroundColor: "white", boxShadow: "0px 0px 0px 0px" }}
        >
          <Toolbar className="bar">
            <Box className="logo">
              <IconButton size="large" edge="start">
                <Image src="/logo.svg" alt="logo Afrianska" layout="fill" />
              </IconButton>
            </Box>
            <Box className="menu">
              <IconButton size="large" edge="end" color="default">
                <MenuIcon fontSize="medium" />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </NavbarStyle>
  );
};
