import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./counterSlice";

const CounterFeature = (props) => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleIncreaseClick = () => {
    const action = increase(124);
    console.log(">>> action:", action);
    dispatch(action);
  };
  const handleDecreaseClick = () => {
    const action = decrease(124);
    console.log(">>> action:", action);
    dispatch(action);
  };
  return (
    <div>
      CounterFeature: {count}
      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
        <button onClick={handleDecreaseClick}>Increase</button>
      </div>
    </div>
  );
};

export default CounterFeature;
