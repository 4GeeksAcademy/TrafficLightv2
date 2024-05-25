import React, { useEffect, useState } from "react";
import ButtonSwitch from "./ButtonSwitch";

const Semaforo = () => {
  const [luz, setLuz] = useState("red");

  const changeLuz = (event) => {
    const color = event.target.id;
    if (color === "orange") {
      setLuz("orange");
    } else if (color === "green") {
      setLuz("green");
    } else {
      setLuz("red");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("parpadeo");

      if (luz === "orange") {
        setLuz("off");
      } else if (luz === "off") {
        setLuz("orange");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [luz]);

  return (
    <>
      <div className="grid justify-center">
        <div className="bg-black h-20 w-5 justify-self-center"></div>
        <ul className="bg-black p-4 grid gap-4 mx-10 h-64 w-32 justify-center rounded-xl">
          <li
            id="red"
            className={`rounded-full size-16 ${
              luz === "red" ? "bg-red-500" : "bg-red-950"
            }`}
            onClick={changeLuz}
          ></li>
          <li
            id="orange"
            className={`rounded-full size-16 ${
              luz === "orange" ? "bg-orange-500" : "bg-orange-950"
            }`}
            onClick={changeLuz}
          ></li>
          <li
            id="green"
            className={`rounded-full size-16 ${
              luz === "green" ? "bg-green-500" : "bg-green-950"
            }`}
            onClick={changeLuz}
          ></li>
        </ul>
      </div>
      <ButtonSwitch luz={luz} setLuz={setLuz} />
    </>
  );
};

export default Semaforo;
