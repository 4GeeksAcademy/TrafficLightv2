import React from "react";

const ButtonSwitch = ({ luz = "red", setLuz }) => {
  const alternate = () => {
    if (luz === "red") {
      setLuz("orange");
    } else if (luz === "orange") {
      setLuz("green");
    } else {
      setLuz("red");
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
