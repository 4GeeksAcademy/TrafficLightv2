import React from "react";
import PropTypes from "prop-types";

const PurpleButton = ({ showPurple, setShowPurple, light, setLight }) => {
  const alternatePurple = () => {
    if (showPurple == "hidden") setShowPurple("");
    else {
      setShowPurple("hidden");
      if (light === "purple") {
        setLight("red");
      }
    }
  };
  return (
    <button
      className="bg-purple-800 text-white p-2 rounded-lg"
      onClick={alternatePurple}
    >
      {showPurple === "hidden" ? "Mostrar luz purpura" : "Ocultar luz purpura"}
    </button>
  );
};

PurpleButton.propTypes = {
  setShowPurple: PropTypes.func.isRequired,
  showPurple: PropTypes.string.isRequired,
  light: PropTypes.string.isRequired,
  setLight: PropTypes.func.isRequired,
};

export default PurpleButton;
