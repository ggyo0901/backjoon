import { useInput } from "../hook/useinput";

const Second = () => {
  const [num1, setNum1, changeNum1] = useInput("");
  const [num2, setNum2, changeNum2] = useInput("");
  const [test, setTest, changeTest] = useInput("");
  let N1 = parseInt(num1);
  let N2 = parseInt(num2);
  let T = parseInt(test);
  let arry = [];
  if (N1 > 0 || N2 < 10) {
    console.log("입력할수없는 숫자입니다");
  } else {
    for (let i = 0; i <= T; i++) {
      N1 + N2;
    }
  }
  return (
    <>
      <input
        type="text"
        placeholder="테스트 케이스 개수"
        value={test}
        onChange={changeTest}
      />
      <input
        type="text"
        placeholder="첫번쨰 정수"
        value={num1}
        onChange={changeNum1}
      />
      <input
        type="text"
        placeholder="두번쨰 정수"
        value={num2}
        onChange={changeNum2}
      />
      <button onClick={calculation}>연산</button>
    </>
  );
};
export default Second;
