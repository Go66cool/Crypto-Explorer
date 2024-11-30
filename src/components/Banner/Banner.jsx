import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import Carousel from "./Carousel";

const BannerStyle = styled("div")({
  backgroundImage: "url(./new-background-image.jpg)", // Change to a different background image
  height: 400,
  display: "flex",
  flexDirection: "column",
  paddingTop: 25,
  justifyContent: "space-around",
  textAlign: "center",
  color: "silver",
});

const Banner = () => {
  return (
    <BannerStyle>
      <div>
        <Typography
          variant="h2"
          style={{
            fontWeight: "bold",
            marginBottom: 15,
            fontFamily: "Arial, sans-serif",
            color: "lightblue",
          }}
        >
          Crypto Explorer
        </Typography>
        <Typography
          variant="subtitle2" // Fixed the variant name
          style={{
            color: "lightgrey",
            textTransform: "capitalize",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Discover the Latest Trends in Cryptocurrency
        </Typography>
        <Carousel />
      </div>
    </BannerStyle>
  );
};

export default Banner;
