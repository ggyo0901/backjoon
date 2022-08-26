import { useCallback, useState } from "react";

const Year = () => {
  const [year, setYear] = useState("");
  const [result, setResult] = useState("");
  const yearChange = useCallback((e) => {
    setYear(e.target.value);
  });
  const tranceYear = useCallback(() => {
    setResult(parseInt(year) - 543);
    console.log(result);
  }, [year, result]);
  return (
    <>
      <input type="text" name="year" value={year} onChange={yearChange} />
      <button onClick={tranceYear}>서기 연도 계산</button>
      <div>{result}</div>
    </>
  );
};
export default Year;
