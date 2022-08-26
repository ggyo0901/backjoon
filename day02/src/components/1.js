import { useCallback, useState } from "react";
import { useInput } from "../hook/useinput";
import { Input, Button, Result } from "./style";
const Comparison = () => {
  const [num1, setNum1, changnum1] = useInput("");
  const [num2, setNum2, changnum2] = useInput("");
  const [result, setResult] = useState("");
  const onHandler = useCallback(() => {
    if (parseInt(num1) > parseInt(num2)) {
      setResult(">");
    } else if (parseInt(num1) < parseInt(num2)) {
      setResult("<");
    } else {
      setResult("==");
    }
  });
  return (
    <>
      <Input type="text" value={num1} onChange={changnum1} />
      <Input type="text" value={num2} onChange={changnum2} />

      <Result>{result}</Result>
      <Button onClick={onHandler}>결과</Button>
    </>
  );
};
export default Comparison;
