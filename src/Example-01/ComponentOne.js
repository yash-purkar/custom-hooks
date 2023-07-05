import { useState } from "react";
import { useDocumentTitle } from "../CustomHooks/useDocumentTitle";

export const ComponentOne = () => {
  const [count, setCount] = useState(0);

  useDocumentTitle(count)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
