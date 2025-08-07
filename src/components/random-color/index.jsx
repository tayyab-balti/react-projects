import React, { use, useEffect, useState } from "react";

export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleRandomHexColor() {
    // #021201
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; // gives values bw 0 to 15
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor)
    // console.log(hexColor);
  }

  function handleRandomRgbColor() {
    // rgb(25, 91, 89)
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    // console.log(`rgb(${r},${g},${b})`);
    setColor(`rgb(${r}, ${g}, ${b})`)
  }

  useEffect(()=>{
    if (colorType === "rgb") handleRandomRgbColor();
    else handleRandomHexColor();
  }, [colorType]);

  return (
    <div
      style={{
        background: color,
        textAlign: "center",
        justifyContent: "center",
        color: "#fff",
        height: "100vh",
        width: "100vw",
      }}
    >
      <button onClick={() => setColorType("hex")}>HEX Color</button>
      <button onClick={() => setColorType("rgb")}>RGB Color</button>
      <button
        onClick={() =>
          colorType === "hex" ? handleRandomHexColor() : handleRandomRgbColor()
        }
      >
        Generate Random Color
      </button>
      <div
      style={{
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '60px',
        marginTop: '50px',
        gap: '10px',
        flexDirection: 'column'
      }}
      >
        <h3>{colorType === 'hex' ? "HEX Color" : "RGB Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
