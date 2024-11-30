import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { TrendingCoins } from "../../config/api";
import axios from "axios";
import { useCrypto } from "../../CryptoContext";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

const CarouselContainer = styled("div")({
  height: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  color: "lightblue", // Change to a lighter color
  margin: 20,
});

const ItemContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textTransform: "uppercase",
  color: "inherit",
});

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = useCrypto();

  const fetchTrendingCoins = async () => {
    try {
      const { data } = await axios.get(TrendingCoins(currency));
      setTrending(data);
    } catch (error) {
      console.error("Error fetching trending coins:", error);
    }
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const items = trending.map((coin) => {
    const profit = coin.price_change_percentage_24h >= 0;
    return (
      <Link
        to={`/coins/${coin.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <ItemContainer>
          <img
            src={coin.image}
            alt={coin.name}
            height="80"
            style={{ marginBottom: 10 }}
          />
          <span>
            {coin?.symbol.toUpperCase()}
            <span
              style={{
                color: profit ? "rgb(14,203,129)" : "red",
                fontWeight: 500,
                marginLeft: 5,
              }}
            >
              <strong>
                {profit && "+"}
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </strong>
            </span>
          </span>
          <span style={{ fontSize: 22, fontWeight: 500 }}>
            {symbol} {numberWithCommas(coin.current_price)}
          </span>
        </ItemContainer>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 4,
    },
    512: {
      items: 8,
    },
  };

  return (
    <CarouselContainer>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={0}
        animationDuration={1000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </CarouselContainer>
  );
};

export default Carousel;
