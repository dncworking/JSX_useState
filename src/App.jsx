import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import One from "./One";
import Two from "./Two";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <One />
      <Two />
    </>
  );
}

export default App;
