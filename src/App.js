import { useState } from "react";
import Counter from "./conponents/counter";
import './style/style.css'

const App = () => {
  const [theme, setTheme] = useState("dark");

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
      <Counter />
    </>
  );
};

export default App;
