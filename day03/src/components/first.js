import { useEffect } from "react";
import { useCallback } from "react";
import { useInput } from "../hook/useinput";

const First = () => {
  const [num, setNum, onChangeNum] = useInput("");
  const [result, setResult] = useInput("");
  const clickSubmit = useCallback(() => {
    let num1 = parseInt(num);
    let sub = [];

    if (num1 < 1) {
      console.log("0이하의 수는입력 불가");
    } else if (num > 10) {
      console.log("9이상의 수는 입력불가");
    } else {
      for (let i = 1; i < 10; i++) {
        sub.push(num1 * i);
        setResult(sub);
      }
    }
  });

  return (
    <>
      <input
        type="text"
        placeholder="단수입력"
        value={num}
        onChange={onChangeNum}
      />
      <button onClick={clickSubmit}>출력</button>

      <div>
        {num}x1={result[0]}
      </div>
      <div>
        {num}x2={result[1]}
      </div>
      <div>
        {num}x3={result[2]}
      </div>
      <div>
        {num}x4={result[3]}
      </div>
      <div>
        {num}x5={result[4]}
      </div>
      <div>
        {num}x6={result[5]}
      </div>
      <div>
        {num}x7={result[6]}
      </div>
      <div>
        {num}x8={result[7]}
      </div>
      <div>
        {num}x9={result[8]}
      </div>
    </>
  );
};
export default First;
