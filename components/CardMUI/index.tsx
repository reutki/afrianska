import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from "next/image";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CardStyle } from "./styled";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../pages/theme";

export const CardMUI=(props)=>{   

  return (
<>
        <ThemeProvider theme={theme}>
      <CardStyle>

    <Card sx={{ maxWidth:300 }}>
      <CardActionArea>
        <CardMedia 
          component="svg"
          height={props.height}
          image={props.src}
          alt={props.alt}
          />
        <CardContent >
          <Typography gutterBottom color="primary.dark" variant="h5" component="div">
           {props.title}
          </Typography>
          <Typography gutterBottom color="primary.dark" variant="body1">
           {props.description}
          </Typography>
          <Button color="secondary">Learn More <IconButton color="secondary"><ArrowForwardIcon color="secondary"/></IconButton> </Button>
        </CardContent>
      </CardActionArea>
    </Card>
          </CardStyle>
          </ThemeProvider>
          </>
    )}