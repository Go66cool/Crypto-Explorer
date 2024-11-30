import React from "react";
import { styled } from "@mui/material/styles";

const StyledButton = styled("span")(({ theme, selected }) => ({
  border: "1px solid gold",
  borderRadius: 5,
  padding: "10px 20px",
  fontFamily: "Montserrat",
  cursor: "pointer",
  backgroundColor: selected ? "gold" : "transparent",
  color: selected ? "black" : "inherit",
  fontWeight: selected ? 700 : 500,
  "&:hover": {
    backgroundColor: "gold",
    color: "black",
  },
  width: "22%",
}));

const SelectButton = ({ children, selected, onClick }) => {
  return (
    <StyledButton onClick={onClick} selected={selected}>
      {children}
    </StyledButton>
  );
};

export default SelectButton;