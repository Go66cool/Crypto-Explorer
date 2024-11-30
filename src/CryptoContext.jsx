import React, { createContext, useContext, useState, useEffect } from "react";

const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    setSymbol(currency === "INR" ? "₹" : "$");
  }, [currency]);

  return (
    <CryptoContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CryptoContext.Provider>
  );
};

export const useCrypto = () => {
  return useContext(CryptoContext);
};
