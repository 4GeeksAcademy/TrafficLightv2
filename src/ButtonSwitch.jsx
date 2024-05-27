import React from "react";

const ButtonSwitch = ({ light = "red", setLight }) => {
  const alternate = () => {
    if (light === "red") {
      setLight("orange");
    } else if (light === "orange") {
      setLight("green");
    } else {
      setLight("red");
    }
  };

  return (
    <div className="grid">
      <button
        onClick={alternate}
        className="justify-self-center mt-5 bg-pink-900 p-2 rounded-lg text-gray-50"
      >
        Alternar
      </button>
    </div>
  );
};

export default ButtonSwitch;
