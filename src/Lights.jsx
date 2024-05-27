import React from "react";
import PropTypes from "prop-types";

const Lights = ({ color, lightColor, changeLight, showPurple }) => {
  return (
    <li
      id={lightColor}
      className={`rounded-full  size-16${
        showPurple === "hidden" ? `hidden` : ``
      } ${
        color === lightColor ? `bg-${lightColor}-500` : `bg-${lightColor}-950`
      }`}
      onClick={changeLight}
    ></li>
  );
};
Lights.propTypes = {
  lightColor: PropTypes.string,
  color: PropTypes.string,
  changeLight: PropTypes.func,
};

export default Lights;
