import { useState } from "react";

function Three() {
  const [input, setInput] = useState("");

  return (
    <>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <p>{input ? `Hello, ${input}` : "Please write your name :P"}</p>
      <p>{`Hello Twice ${input}`}</p>
    </>
  );
}
export default Three;
