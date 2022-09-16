import { useCallback } from "react";
import { useInput } from "../hook/useinput";

const Third = () => {
  const [num, setNum, changeNum1] = useInput("");
  const [result, setResult] = useInput("");
  let N = parseInt(num);
  let sub = 0;
  const calculation = useCallback(() => {
    for (let i = 0; i <= N; i++) {
      sub = sub + i;
    }
    setResult(sub);
  }, [num, result]);
  return (
    <>
      <input type="text" value={num} onChange={changeNum1} />
      <button onClick={calculation}>연산</button>
      <div>{result}</div>
    </>
  );
};
export default Third;
