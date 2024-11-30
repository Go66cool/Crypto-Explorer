import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import { styled } from "@mui/system";

const AppContainer = styled("div")({
  backgroundColor: "#252F40",
  color: "white",
  minHeight: "100vh",
});

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
