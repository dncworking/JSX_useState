import { useState } from "react";

function Two() {
  const [color, setColor] = useState();

  return (
    <div style={{ backgroundColor: color, padding: "50px" }}>
      <button onClick={() => setColor("green")}>ON</button>
      <button onClick={() => setColor("red")}>OFF</button>
    </div>
  );
}
export default Two;
