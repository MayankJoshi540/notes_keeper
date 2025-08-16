import { useState } from "react";
import "../assets/css/navbar.css";

export const Navbar = ({
  setOpen,
  state,
  dispatch,
  palettes,
  currentPalette,
  setCurrentPalette,
}) => {
  const [onPalette, setOnPalette] = useState(false);

  const handlePalette = (item) => {
    setCurrentPalette(item);
    dispatch({ type: "SET_PALETTE", payload: item });
    setOnPalette(false);
  };
  return (
    <div
      className={`navbar ${
        state?.palette ? state?.palette?.name : currentPalette?.name
      }`}
    >
      <div className="nav-wrapper container">
        <span className="logo">Notes Keeper</span>
        <div className="nav-options">
          <div className="nav-icon" onClick={() => setOpen(true)}>
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
