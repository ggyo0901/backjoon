import { useCallback, useState } from "react";
import { useInput } from "../../usehook/useinput";

const Calulation = () => {
  const [num1, setnum1, changeN1] = useInput("");
  const [num2, setnum2, changeN2] = useInput("");
  const [num3, setnum3, changeN3] = useInput("");

  const [result, setResult] = useState("");
  const onRegis = useCallback((e) => {
    console.log(num1);
    console.log(num2);
    console.log(num3);
    if (num1 <= 2) {
      console.log("A의 조건의맞지 않습니다");
    }
    if (num3 > 10000) {
      console.log("C의 조건의 맞지않습니다");
    }
    setResult(
      `첫번쨰줄:${parseInt((num1 + num2) % num3)}      
      두번쨰줄:${parseInt(
        ((num1 % num3) + (num2 % num3)) % num3
      )} 세번쨰:${parseInt((num1 * num2) % num3)} 네번쨰:${parseInt(
        ((num1 % num3) * (num2 % num3)) % num3
      )}`
    );
  });
  return (
    <>
      <input
        type="text"
        value={num1}
        onChange={changeN1}
        placeholder="A는2와같거나 큰수만가능"
      />
      <input type="text" value={num2} onChange={changeN2} placeholder="B" />
      <input
        type="text"
        value={num3}
        onChange={changeN3}
        placeholder="C는 10000이하"
      />
      <button onClick={onRegis}>연산</button>
      <div>{result}</div>
    </>
  );
};
export default Calulation;
