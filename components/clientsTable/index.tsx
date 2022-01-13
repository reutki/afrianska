import { Button, Grid, Paper, styled, Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import ToggleButton from "@mui/material/ToggleButton";
import { useState } from "react";

export const Table = () => {
  const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    alignItems: "center",
  }));

  const [show, setShow] = useState(false);

  return (
    <Box sx={{ justifyContent: "center", display: "flex" }}>
      <Box sx={{ width: "max-content" }}>
        <Grid
          container
          sx={{
            borderBottom: "0.05rem solid white",
          }}
          spacing={0}
        >
          <Grid item>
            <Box
              sx={{
                display: "block",
                width: "4rem",
                padding: "1rem",
                height: "4rem",
              }}
            >
              <Image
                objectFit="contain"
                src={"/logo-light.svg"}
                alt="logo afrianska"
                layout="responsive"
                width={"1rem"}
                height={"1rem"}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                display: "block",
                borderLeft: "0.05rem solid white",
                width: "4rem",
                padding: "1rem",
                height: "4rem",
              }}
            >
              <Image
                objectFit="contain"
                src={"/logo-light.svg"}
                alt="logo afrianska"
                layout="responsive"
                width={"1rem"}
                height={"1rem"}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                display: "block",
                borderLeft: "0.05rem solid white",
                padding: "1rem",
                width: "4rem",
                height: "4rem",
              }}
            >
              <Image
                objectFit="contain"
                src={"/logo-light.svg"}
                alt="logo afrianska"
                layout="responsive"
                width={"1rem"}
                height={"1rem"}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                display: "block",
                borderLeft: "0.05rem solid white",
                padding: "1rem",
                width: "4rem",
                height: "4rem",
              }}
            >
              <Image
                objectFit="contain"
                src={"/logo-light.svg"}
                alt="logo afrianska"
                layout="responsive"
                width={"1rem"}
                height={"1rem"}
              />
            </Box>
          </Grid>
        </Grid>
        {show ? (
          <Grid
            id="expandingRow"
            container
            sx={{
              borderBottom: "0.05rem solid white",
            }}
            spacing={0}
          >
            <Grid item>
              <Box
                sx={{
                  display: "block",
                  width: "4rem",
                  padding: "1rem",
                  height: "4rem",
                }}
              >
                <Image
                  objectFit="contain"
                  src={"/logo-light.svg"}
                  alt="logo afrianska"
                  layout="responsive"
                  width={"1rem"}
                  height={"1rem"}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: "block",
                  padding: "1rem",
                  borderLeft: "0.05rem solid white",
                  width: "4rem",
                  height: "4rem",
                }}
              >
                <Image
                  objectFit="contain"
                  src={"/logo-light.svg"}
                  alt="logo afrianska"
                  layout="responsive"
                  width={"1rem"}
                  height={"1rem"}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: "block",
                  padding: "1rem",
                  borderLeft: "0.05rem solid white",
                  width: "4rem",
                  height: "4rem",
                }}
              >
                <Image
                  objectFit="contain"
                  src={"/logo-light.svg"}
                  alt="logo afrianska"
                  layout="responsive"
                  width={"1rem"}
                  height={"1rem"}
                />
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: "block",
                  padding: "1rem",
                  borderLeft: "0.05rem solid white",
                  width: "4rem",
                  height: "4rem",
                }}
              >
                <Image
                  objectFit="contain"
                  src={"/logo-light.svg"}
                  alt="logo afrianska"
                  layout="responsive"
                  width={"1rem"}
                  height={"1rem"}
                />
              </Box>
            </Grid>
          </Grid>
        ) : null}
        <Grid container spacing={0}>
          <Grid item>
            <Box
              sx={{
                display: "block",
                width: "4rem",
                padding: "1rem",
                height: "4rem",
              }}
            >
              <Image
                objectFit="contain"
                src={"/logo-light.svg"}
                alt="logo afrianska"
                layout="responsive"
                width={"1rem"}
                height={"1rem"}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                display: "block",
                padding: "1rem",
                borderLeft: "0.05rem solid white",
                width: "4rem",
                height: "4rem",
              }}
            >
              <Image
                objectFit="contain"
                src={"/logo-light.svg"}
                alt="logo afrianska"
                layout="responsive"
                width={"1rem"}
                height={"1rem"}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                display: "block",
                padding: "1rem",
                borderLeft: "0.05rem solid white",
                width: "4rem",
                height: "4rem",
              }}
            >
              <Image
                objectFit="contain"
                src={"/logo-light.svg"}
                alt="logo afrianska"
                layout="responsive"
                width={"1rem"}
                height={"1rem"}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                display: "block",
                padding: "1rem",
                borderLeft: "0.05rem solid white",
                width: "4rem",
                height: "4rem",
              }}
            >
              <Button
                color="primary"
                onClick={() => setShow(!show)}
                sx={{ color: "white" }}
              >
                <Typography variant="body1">More Clients</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
