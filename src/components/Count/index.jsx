import React, { useState } from "react";
import "./style.css";
import "./style.scss";
function Count(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="Num">
      <h1>Num : {count}</h1>
      <button
        onClick={() => {
          setCount((x) => x + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Count;
