import React, { useEffect, useState } from "react";
import ButtonSwitch from "./ButtonSwitch";

const Semaforo = () => {
  const [light, setLight] = useState("red");

  const changeLight = (event) => {
    const color = event.target.id;
    if (color === "orange") {
      setLight("orange");
    } else if (color === "green") {
      setLight("green");
    } else {
      setLight("red");
    }
  };

  useEffect(() => {
    if (light === "orange" || light === "off") {
      const interval = setInterval(() => {
        console.log("parpadeo");

        if (light === "orange") {
          setLight("off");
        } else if (light === "off") {
          setLight("orange");
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [light]);

  return (
    <>
      <div className="grid justify-center">
        <div className="bg-black h-20 w-5 justify-self-center"></div>
        <ul className="bg-black p-4 grid gap-4 mx-10 h-64 w-32 justify-center rounded-xl">
          <li
            id="red"
            className={`rounded-full size-16 ${
              light === "red" ? "bg-red-500" : "bg-red-950"
            }`}
            onClick={changeLight}
          ></li>
          <li
            id="orange"
            className={`rounded-full size-16 ${
              light === "orange" ? "bg-orange-500" : "bg-orange-950"
            }`}
            onClick={changeLight}
          ></li>
          <li
            id="green"
            className={`rounded-full size-16 ${
              light === "green" ? "bg-green-500" : "bg-green-950"
            }`}
            onClick={changeLight}
          ></li>
        </ul>
      </div>
      <ButtonSwitch light={light} setLight={setLight} />
    </>
  );
};

export default Semaforo;
