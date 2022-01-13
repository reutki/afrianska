import React from "react";
import Image from "next/image";
import { Box, Link } from "@mui/material";
import { StyledContacts } from "./styled";
import PhoneIcon from "@mui/icons-material/Phone";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import LanguageIcon from "@mui/icons-material/Language";
import { Typography } from "@mui/material";
import { ContactForm } from "../ContactForm";

export const ContactPage = () => {
  return (
    <StyledContacts>
      <div className="container">
        <Box className="left">
          <div className="image">
            <Image
              className="illustration"
              src={"/illustration-contact.svg"}
              objectFit="contain"
              layout="responsive"
              width={100}
              height={100}
              alt="person laying on a couch with a phone"
            />
          </div>
          <div className="adress">
            <Typography
              sx={{ paddingBottom: "1.5rem" }}
              variant="h5"
              color="primary.dark"
            >
              ADRESS
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </Typography>
          </div>
          <Box className="phone">
            <Typography
              sx={{ paddingBottom: "1.5rem" }}
              variant="h5"
              color="primary.dark"
            >
              PHONE
            </Typography>

            <Box sx={{ paddingBottom: "1rem" }} className="phone1">
              <PhoneIcon color="disabled" sx={{ paddingRight: "1rem" }} />
              <Link underline="none" href="tel:+62-812-7313-4321">
                <Typography>+62-812-7313-4321</Typography>
              </Link>
            </Box>
            <Box className="phone2">
              <PhoneIcon color="disabled" sx={{ paddingRight: "1rem" }} />
              <Link underline="none" href="tel:+62-817-000-1234">
                <Typography>+62-817-000-1234</Typography>
              </Link>
            </Box>
          </Box>
          <Box className="onlineService">
            <Typography
              sx={{ paddingBottom: "1.5rem" }}
              variant="h5"
              color="primary.dark"
            >
              ONLINE SERVICE
            </Typography>
            <Box sx={{ paddingBottom: "1rem" }} className="website">
              <LanguageIcon color="disabled" sx={{ paddingRight: "1rem" }} />
              <Link underline="hover" href="www.afrianska.com">
                <Typography color="disabled">www.afrianska.com</Typography>
              </Link>
            </Box>

            <Box className="email">
              <LocalPostOfficeIcon
                color="disabled"
                sx={{ paddingRight: "1rem" }}
              />
              <Link underline="none" href="mailto:hello.afrian@gmail.com">
                <Typography color="disabled">hello.afrian@gmail.com</Typography>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box className="right">
          <ContactForm />
        </Box>
      </div>
    </StyledContacts>
  );
};
