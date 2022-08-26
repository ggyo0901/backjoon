import { useCallback } from "react";
import styled from "styled-components";
import { useInput } from "../hook/useinput";
import { Input, Button, Result } from "./style";
const Dice = () => {
  const [num1, setNum1, changeNum1] = useInput("");
  const [num2, setNum2, changeNum2] = useInput("");
  const [num3, setNum3, changeNum3] = useInput("");
  const [result1, setResult1] = useInput("");

  const trance = useCallback(() => {
    let D1 = parseInt(num1);
    let D2 = parseInt(num2);
    let D3 = parseInt(num3);
    let result = 0;

    if (D1 === D2) {
      if (D1 === D3) {
        result = 10000 + D1 * 1000;
        setResult1(result);
      } else {
        result = 1000 + D1 * 100;
        setResult1(result);
      }
    } else if (D1 === D3) {
      if (D1 === D2) {
        result = 10000 + D1 * 1000;
        setResult1(result);
      } else {
        result = 1000 + D1 * 100;
        setResult1(result);
      }
    } else if (D2 === D3) {
      if (D2 === D1) {
        result = 10000 + D1 * 1000;
        setResult1(result);
      } else {
        result = 1000 + D2 * 100;
        setResult1(result);
      }
    } else {
      if (D1 > D2) {
        if (D1 > D3) {
          result = 100 * D1;
          setResult1(result);
        } else {
          result = 100 * D3;
          setResult1(result);
        }
      } else if (D2 > D1) {
        if (D2 > D3) {
          result = 100 * D2;
          setResult1(result);
        } else {
          result = 100 * D3;
          setResult1(result);
        }
      }
    }
  }, [num1, num2, num3]);
  return (
    <>
      <Input
        type="text"
        value={num1}
        onChange={changeNum1}
        placeholder="첫번쨰주사위"
      />

      <Input
        type="text"
        value={num2}
        onChange={changeNum2}
        placeholder="두번쨰주사위"
      />
      <Input
        type="text"
        value={num3}
        onChange={changeNum3}
        placeholder="세번쨰주사위"
      />
      <Result>{result1}</Result>
      <Button onClick={trance}>알람확인</Button>
    </>
  );
};
export default Dice;
