import React from "react";
import PropTypes from "prop-types";

const Lights = (lightColor) => {

// {    const changeLuz = () => {
//         setLuz(luz === lightColor ? null : lightColor);
//       };}

  return (
    <li
    id={lightColor}
    className={`rounded-full size-16 ${
      color === lightColor ? `bg-${lightColor}-500` : `bg-${lightColor}-950`
    }`}
    onClick={changeLuz}
  ></li>
  );
};
Lights.propTypes = {
  lightColor: PropTypes.string,
};

export default Lights;
