import React from "react";
import PropTypes from "prop-types";

const ButtonSwitch = ({ light = "red", setLight, showPurple }) => {
  const alternate = () => {
    if (light === "red") {
      setLight("orange");
    } else if (light === "orange" || light === "off") {
      setLight("green");
    } else if (light === "green" && showPurple == "") {
      setLight("purple");
    } else {
      setLight("red");
    }
  };

  return (
    <div className="grid">
      <button
        onClick={alternate}
        className="bg-gray-900 p-2 rounded-lg text-gray-50"
      >
        Alternar luz
      </button>
    </div>
  );
};

ButtonSwitch.propTypes = {
  light: PropTypes.string.isRequired,
  setLight: PropTypes.func.isRequired,
  showPurple: PropTypes.string.isRequired,
};

export default ButtonSwitch;
