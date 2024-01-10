import { useState } from "react";
import Counter from "./conponents/counter";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [val, setVal] = useState(0);

  const handleCLick = () => {
    alert("Tas clické");
  };
  const backgroundManager = () => {
    return theme === "dark" ? "green" : "gold";
  };

  const handleTheme = () => {
    setTheme((prevState) => {
      if (theme === "dark") {
        return "light";
      }
      return "dark";
    });
  };

  const addCounter = () => {
    setVal(val + 1);
  };

  const subCounter = () => {
    if (val > 0) setVal(val - 1);
  };

  return (
    <>
      <h1
        style={{
          backgroundColor: backgroundManager(),
        }}
      >
        State & Event
      </h1>
      <button onClick={handleCLick}>CLICK</button>
      <button onMouseOver={() => console.log("HELLO")}>CLICK2</button>
      <button onClick={handleTheme}>Change BG COLOR</button>
      <Counter val={val} />
      <button onClick={subCounter}>-1</button>
      <button onClick={addCounter}>+1</button>
    </>
  );
};

export default App;
