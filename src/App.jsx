import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
    </>
  );
}

export default App;
