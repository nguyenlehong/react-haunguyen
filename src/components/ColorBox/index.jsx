import React, { useState } from "react";

function ColorBox(props) {
  const [color, setColor] = useState("white");
  return (
    <div>
      <h4>{color}</h4>
      <button
        onClick={() => {
          setColor("red");
        }}
      >
        {" "}
        click
      </button>{" "}
      <button
        onClick={() => {
          setColor("blue");
        }}
      >
        {" "}
        chang
      </button>
    </div>
  );
}

export default ColorBox;
