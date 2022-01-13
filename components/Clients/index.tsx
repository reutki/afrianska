import React from "react";
import { Divider, Typography } from "@mui/material";
import Image from "next/image";
import { Footer } from "../Footer";
import { StyledClientPage } from "./styled";
import { Table } from "../clientsTable";

export const ClientComponent = () => {
  return (
    <StyledClientPage>
      <div className="container">
        <div className="info">
          <div className="title">
            <Typography variant="h4">Our Beloved Client</Typography>
          </div>
          <div className="comments">
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              cum, quasi eius officiis asperiores quibusdam suscipit impedit
              nulla, tempora sed perspiciatis exercitationem adipisci optio?
              Saepe nam rerum earum consectetur libero.
            </Typography>
          </div>
        </div>
        <div className="clientsTable">
          <Table />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </StyledClientPage>
  );
};
