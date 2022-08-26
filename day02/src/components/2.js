import { useCallback, useState } from "react";
import { useInput } from "../hook/useinput";
import { Input, Button, Result } from "./style";
const Exam = () => {
  const [score, setScore, changeScore] = useInput("");
  const [result, setResult] = useState("");
  const changeGrade = useCallback(() => {
    let num = parseInt(score);
    if (num >= 90) {
      setResult("A");
    } else if (num >= 80) {
      setResult("B");
    } else if (num >= 70) {
      setResult("C");
    } else if (num >= 60) {
      setResult("D");
    } else if (num >= 0) {
      setResult("F");
    } else {
      setResult("입력할수 없는 값입니다");
    }
  });
  return (
    <>
      <Input type="text" value={score} onChange={changeScore} />
      <Result>{result}</Result>
      <Button onClick={changeGrade}>학점변환기</Button>
    </>
  );
};
export default Exam;
