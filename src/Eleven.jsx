import { useState } from "react";

function Eleven() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count - 1)} disabled={count <= 0}>
        Decrement
      </button>

      <button onClick={() => setCount(count + 1)} disabled={count >= 10}>
        Increment
      </button>

      {count >= 10 && <p style={{ color: "red" }}>Pasiektas limitas!</p>}
    </div>
  );
}

export default Eleven;
