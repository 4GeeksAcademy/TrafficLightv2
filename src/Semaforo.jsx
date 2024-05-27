import React, { useEffect, useState } from "react";
import ButtonSwitch from "./ButtonSwitch";
import Lights from "./Lights";
import PurpleButton from "./PurpleButton";

const Semaforo = () => {
  const [light, setLight] = useState("red");
  const [showPurple, setShowPurple] = useState("hidden");
  console.log(light)

  const changeLight = (event) => {
    const color = event.target.name;
    setLight(color);
  };

  useEffect(() => {
    if (light === "orange" || light === "off") {
      const interval = setInterval(() => {
        setLight((prevLight) => (prevLight === "orange" ? "off" : "orange"));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [light]);

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-16">
          <ButtonSwitch
            light={light}
            setLight={setLight}
            showPurple={showPurple}
          />
        </div>
        <div className="grid">
          <div className="bg-black h-20 w-5 justify-self-center"></div>
          <ul className="bg-black p-4 grid gap-4 mx-3 h-fit w-fit justify-center justify-self-center rounded-xl">
            <Lights
              lightColor={"red"}
              color={light}
              changeLight={changeLight}
            />
            <Lights
              lightColor={"orange"}
              color={light}
              changeLight={changeLight}
            />
            <Lights
              lightColor={"green"}
              color={light}
              changeLight={changeLight}
            />
            <Lights
              lightColor={"purple"}
              color={light}
              changeLight={changeLight}
              showPurple={showPurple}
              setShowPurple={setShowPurple}
            />
          </ul>
        </div>
        <div className="mt-16">
          <PurpleButton
            light={light}
            setLight={setLight}
            showPurple={showPurple}
            setShowPurple={setShowPurple}
          />
        </div>
      </div>
    </>
  );
};

export default Semaforo;
