import { useCallback, useState } from "react";
import { useInput } from "../../usehook/useinput";

const Mul = () => {
  const [num1, setnum1, changeN1] = useInput("");
  const [num2, setnum2, changeN2] = useInput("");
  const [result, setResult] = useState("");

  const onRegis = useCallback(() => {
    let arrNum2 = num2.split("");
    console.log(arrNum2);
    setResult(`첫번째 ${parseInt(num1 * arrNum2[2])}
    
    두번쨰 ${parseInt(num1 * arrNum2[1])}
    세번쨰 : ${parseInt(num1 * arrNum2[0])}
    결과: ${parseInt(num1 * num2)}
    `);
  });
  return (
    <>
      <input type="text" value={num1} onChange={changeN1} />
      <input type="text" value={num2} onChange={changeN2} />
      <div>{result}</div>
      <button onClick={onRegis}>연산</button>
    </>
  );
};
export default Mul;
