import React, { useState } from "react";
import CelciusInput from "./CelciusInput";
import ConvertedResult from "./ConvertedResult";
import "./Container.css";

const Container = () => {
  const [celcius, setCelcius] = useState(0);
  return (
    <div className="container">
      <h1>Temperature Converter</h1>
      <h2 className="input-label">Celcius</h2>
      <CelciusInput celcius={celcius} setCelcius={setCelcius} />
      <ConvertedResult celcius={celcius} />
    </div>
  );
};

export default Container;
