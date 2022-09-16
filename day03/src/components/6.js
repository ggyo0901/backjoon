import { useCallback } from "react";
import { useInput } from "../hook/useinput";

const Star = () => {
  const [num, setNum, changeN] = useInput("");
  const [result, setResult] = useInput("");
  const clickStar = useCallback(() => {
    let N = parseInt(num);
    for (let i = 0; i <= 5; i++) {
      for (let j = 0; j <= i; j++) {
        setResult("*");
      }
    }
  });
  return (
    <>
      <input type="text" value={num} onChange={changeN} />
      <button onClick={clickStar}> 별</button>
      <div>{result}</div>
    </>
  );
};
export default Star;
