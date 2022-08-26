import { useState } from "react";
import Num1 from "./1";

const Num2 = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  const [num5, setNum5] = useState("");
  const [num6, setNum6] = useState("");
  const [num7, setNum7] = useState("");
  const num1Change = (e) => {
    setNum1(e.target.value);
    console.log(e.target.value);
  };
  const num2Change = (e) => {
    setNum2(e.target.value);
  };
  const plus = () => {
    setNum3(parseInt(num1 + num2));
    setNum4(parseInt(num1 - num2));
    setNum5(parseInt(num1 * num2));
    setNum6(parseInt(num1 / num2));
    setNum7(parseInt(num1 % num2));
  };
  return (
    <>
      <input type="text" name="num1" onChange={num1Change} value={num1} />
      <input type="text" name="num2" onChange={num2Change} value={num2} />

      <button onClick={plus}>합계</button>
      <div>합:{num3}</div>
      <div>뻬기:{num4}</div>
      <div>곱하기:{num5}</div>
      <div>몫:{num6}</div>
      <div>나머지:{num7}</div>
    </>
  );
};
export default Num2;
