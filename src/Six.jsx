import { useState } from "react";

function Six() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  //   const [resetAll, setResetAll] = useState(0);

  const resetAll = () => {
    setCountOne(0);
    setCountTwo(0);
  };

  return (
    <>
      <p>{countOne}</p>
      <button onClick={() => setCountOne(countOne + 1)}>Increment</button>
      <button onClick={() => setCountOne(countOne - 1)}>Decrement</button>
      <p>{countTwo}</p>
      <button onClick={() => setCountTwo(countTwo + 1)}>Increment</button>
      <button onClick={() => setCountTwo(countTwo - 1)}>Decrement</button>
      <button onClick={resetAll}>Reset All</button>
    </>
  );
}
export default Six;
