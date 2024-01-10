import { useState } from "react";

const Counter = () => {
  const [val, setVal] = useState(0);

  const addCounter = () => {
    setVal(val + 1);
  };

  const subCounter = () => {
    if (val > 0) setVal(val - 1);
  };

  return (
    <>
      <div className="counter">{val}</div>
      <button onClick={subCounter}>-1</button>
      <button onClick={addCounter}>+1</button>
    </>
  );
};

export default Counter;
