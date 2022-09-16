import { useState } from "react";
import { useInput } from "../hook/useinput";

const Bill = () => {
  let arry = [];
  const [total, setTotal, changeT] = useInput("");
  const [cnt, setCnt, changeC] = useInput("");
  const [proName, setProName, changeN] = useInput("");
  const [product, setProduct] = useState([]);
  const clickAdd = (cnt, prodName) => {
    let Count = parseInt(cnt);
    for (let i = 0; i <= Count; i++) {
      setProduct([...product, { id: cnt, name: prodName }]);
    }
  };
  console.log(product);
  return (
    <>
      <input
        type="text"
        placeholder="총금액"
        value={total}
        onChange={changeT}
      />
      <input
        type="text"
        placeholder="물건의 갯수"
        value={cnt}
        onChange={changeC}
      />
      <button onClick={clickAdd}>영수증</button>
      <br />
      <h2>영수증</h2>
      <div>총금액:{total}</div>
      <div>물건갯수:{cnt}</div>;
      {product.map((v) => {
        <input type="text" value={proName} onChange={changeN} />;
      })}
    </>
  );
};
export default Bill;
