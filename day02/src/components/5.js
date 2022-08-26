import { useCallback } from "react";
import styled from "styled-components";
import { useInput } from "../hook/useinput";

const Alam = () => {
  const [num1, changeNum1] = useInput("");
  const [num2, changeNum2] = useInput("");
  const [result1, setResult1] = useInput("");
  const [result2, setResult2] = useInput("");
  const trance = useCallback(() => {
    let N1 = parseInt(num1);
    let N2 = parseInt(num2);
    if (0 <= N1 < 24) {
      N1 = N1 * 60;
      if (0 < N2 < 59) {
        let N3 = N1 + N2;

        let H = (N3 - 45) / 60;
        let M = setResult1(H);
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
