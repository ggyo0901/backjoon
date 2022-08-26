import { useCallback } from "react";
import { useInput } from "../hook/useinput";
import { Input, Button, Result } from "./style";
const Quadrant = () => {
  const [num1, setNum1, changeNum1] = useInput("");
  const [num2, setNum2, changeNum2] = useInput("");
  const [result, setResult] = useInput("");
  const trance = useCallback(() => {
    let N1 = parseInt(num1);
    let N2 = parseInt(num2);
    if (N1 > 0) {
      if (N2 > 0) {
        setResult("1");
      } else {
        setResult("4");
      }
    } else {
      if (N2 > 0) {
        setResult("2");
      } else {
        setResult("3");
      }
    }
  }, [num1, num2, result]);
  return (
    <>
      <Input
        type="text"
        value={num1}
        onChange={changeNum1}
        placeholder="x좌표입력"
      />

      <Input
        type="text"
        value={num2}
        onChange={changeNum2}
        placeholder="y좌표입력"
      />
      <Result>제{result}사분면</Result>
      <Button onClick={trance}>n사분면확인기</Button>
    </>
  );
};
export default Quadrant;
