import { useState } from "react";

function Eight() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <>
      <p>{likes}</p>
      <button onClick={() => setLikes(likes + 1)}>👍 Like</button>
      <p>{dislikes}</p>
      <button onClick={() => setDislikes(dislikes + 1)}>👎 Dislike</button>
    </>
  );
}
export default Eight;
