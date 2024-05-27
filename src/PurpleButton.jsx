import React from "react";
import PropTypes from "prop-types";

const PurpleButton = ({ showPurple, setShowPurple }) => {
  const alternatePurple = () => {
    if (showPurple == "hidden") setShowPurple("");
    else setShowPurple("hidden");
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
  setShowPurple: PropTypes.func,
  showPurple: PropTypes.string,
};

export default PurpleButton;
