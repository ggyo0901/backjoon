import { useCallback, useState } from "react";

const Sign = () => {
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [userList, setUserList] = useState([
    {
      id: 1,
      email: "joonas",
    },
    {
      id: 2,
      email: "baekjoon",
    },
  ]);
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const result = useCallback(() => {
    if (email === "joonas") {
      setAnswer(`${email}??!`);
    } else {
      setAnswer("회원가입완료");
    }
  }, [email]);
  return (
    <>
      <input type="text" name="email" value={email} onChange={emailChange} />
      <span>{answer}</span>
      <button onClick={result}>회원가입</button>
    </>
  );
};
export default Sign;
