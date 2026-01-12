import { useState } from "react";

function Four() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      {isVisible ? <p>BOO! 👻</p> : <p>Content is hidden</p>}{" "}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Content
      </button>
    </>
  );
}
export default Four;
