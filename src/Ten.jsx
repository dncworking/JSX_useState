import { useState } from "react";

function Ten() {
  const [color, setColor] = useState();

  return (
    <div style={{ backgroundColor: color }}>
      <p>Pick color</p>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
     
    </div>
  );
}
export default Ten;
