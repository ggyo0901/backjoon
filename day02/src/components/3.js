import { useCallback, useState } from "react";
import { useInput } from "../hook/useinput";
import { Input, Button, Result } from "./style";

const LeapYear = () => {
  const [Leap, setLeap, changeLeap] = useInput("");
  const [result, setResult] = useInput("");

  const trance = useCallback(() => {
    let num = parseInt(Leap);
    if (num % 4 == 0) {
      if (num % 100 != 0 || num % 400 == 0) {
        setResult("1");
      }
    } else {
      setResult("0");
    }
  }, [Leap]);

  return (
    <>
      <Input type="text" value={Leap} onChange={changeLeap} />
      <Result>{result}</Result>
      <Button onClick={trance}>확인</Button>
    </>
  );
};
export default LeapYear;
