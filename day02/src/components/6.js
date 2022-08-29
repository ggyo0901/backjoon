import { useCallback } from "react";
import { Input, Button, Result } from "./style";
import { useInput } from "../hook/useinput";

const Oven = () => {
  const [num1, setNum1, changeNum1] = useInput("");
  const [num2, setNum2, changeNum2] = useInput("");
  const [num3, setNum3, changeNum3] = useInput("");
  const [result1, setResult1] = useInput("");
  const [result2, setResult2] = useInput("");
  const trance = useCallback(() => {
    let N1 = parseInt(num1);
    let N2 = parseInt(num2);
    let N3 = parseInt(num3);
    if (N1 > 0 || N1 < 24) {
      N1 = N1 * 60;
      if (N2 > 0 || N2 < 60) {
        let N4 = N1 + N2 + N3;

        let H = parseInt(N4 / 60);
        let M = N2 + N3 - 60;
        if (H == 0) {
          H = 23 - H;
        } else if (H == 24) {
          H = 0;
        }
        if (M >= 60) {
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
      <Input
        type="text"
        value={num3}
        onChange={changeNum3}
        placeholder="추가시간"
      />
      <Result>
        {result1}시 {result2}분
      </Result>
      <Button onClick={trance}>오븐시간</Button>
    </>
  );
};

export default Oven;
