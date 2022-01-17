import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Footer } from "../Footer";
import { StyledClientPage } from "./styled";
import { Table } from "../clientsTable";

export const ClientComponent = () => {
  return (
    <StyledClientPage>
      <Box className="container">
        <Box className="info">
          <Box className="title">
            <Typography variant="h4">Our Beloved Client</Typography>
          </Box>
          <Box className="comments">
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              cum, quasi eius officiis asperiores quibusdam suscipit impedit
              nulla, tempora sed perspiciatis exercitationem adipisci optio?
              Saepe nam rerum earum consectetur libero.
            </Typography>
          </Box>
        </Box>
        <Box className="clientsTable">
          <Table />
        </Box>
        <Box className="footer">
          <Footer />
        </Box>
      </Box>
    </StyledClientPage>
  );
};
