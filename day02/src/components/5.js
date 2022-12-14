import { useCallback } from "react";
import { Input, Button, Result } from "./style";
import { useInput } from "../hook/useinput";

const Alam = () => {
  const [num1, setNum1, changeNum1] = useInput("");
  const [num2, setNum2, changeNum2] = useInput("");
  const [result1, setResult1] = useInput("");
  const [result2, setResult2] = useInput("");
  const trance = useCallback(() => {
    let N1 = parseInt(num1);
    let N2 = parseInt(num2);
    if (N1 > 0 || N1 < 24) {
      N1 = N1 * 60;
      if (N2 > 0 || N2 < 60) {
        let N3 = N1 + N2;

        let H = parseInt((N3 - 45) / 60);
        let M = 60 + N2 - 45;
        if (H == 0) {
          H = 23 - H;
        }
        if (M > 60) {
          M = M - 60;
        }
        setResult1(H);
        setResult2(M);
      }
    }
  });
  return (
    <>
      <Input
        type="text"
        value={num1}
        onChange={changeNum1}
        placeholder="시간입력"
      />

      <Input
        type="text"
        value={num2}
        onChange={changeNum2}
        placeholder="분입력"
      />
      <Result>
        {result1}시 {result2}분
      </Result>
      <Button onClick={trance}>알람확인</Button>
    </>
  );
};
export default Alam;
