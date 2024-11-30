import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useCrypto } from "../CryptoContext"; // Updated import path
import { Link } from "react-router-dom";

const HeaderContainer = styled("div")({
  flexGrow: 1,
});

const Title = styled(Typography)({
  flex: 1,
  color: "lightblue",
  fontFamily: "Arial, sans-serif",
  fontWeight: "bold",
  cursor: "pointer",
});

const Header = () => {
  const { currency, setCurrency } = useCrypto();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <HeaderContainer>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Title variant="h6">Crypto Explorer</Title>
              </Link>
              <Select
                variant="outlined"
                sx={{ width: 100, height: 40, ml: "auto" }}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </HeaderContainer>
    </ThemeProvider>
  );
};

export default Header;
