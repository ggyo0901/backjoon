import { useCallback, useState } from "react";
import { useInput } from "../../usehook/useinput";

const Chess = () => {
  const [king, setKing, onChangeKing] = useInput("");
  const [queen, setQueen, onChangeQueen] = useInput("");
  const [rook, setRook, onChangeRook] = useInput("");
  const [bishop, setBishop, onChangeBishop] = useInput("");
  const [night, setNight, onChangeNight] = useInput("");
  const [pawn, setPawn, onChangePawn] = useInput("");

  const [result, setResult] = useState("");

  const sum = useCallback(() => {
    if (king) {
      if (king >= 0) {
        console.log(`킹의필요한개수는:${1 - king}개`);
      }
    }

    if (queen) {
      if (queen >= 0) {
        console.log(`퀸의필요한개수는:${1 - queen}개`);
      }
    }

    if (rook) {
      if (rook >= 0) {
        console.log(`룩의필요한개수는:${2 - rook}개`);
      }
    }

    if (night) {
      if (night >= 0) {
        console.log(`나이트의필요한개수는:${2 - night}개`);
      }
    }

    if (pawn) {
      if (pawn >= 0) {
        console.log(`폰의필요한개수는:${8 - pawn}개`);
      }
    }
  }, [king, queen, rook, bishop, night, pawn]);
  return (
    <>
      <input
        type="text"
        placeholder="킹 갯수 입력(0~10만입력가능)"
        onChange={onChangeKing}
        value={king}
      />
      <input
        type="text"
        placeholder="퀸 갯수 입력(0~10만입력가능)"
        onChange={onChangeQueen}
        value={queen}
      />
      <input
        type="text"
        placeholder="룩 갯수 입력(0~10만입력가능)"
        onChange={onChangeRook}
        value={rook}
      />
      <input
        type="text"
        placeholder="비숍 갯수 입력(0~10만입력가능)"
        value={bishop}
        onChange={onChangeBishop}
      />
      <input
        type="text"
        placeholder="나이트 갯수 입력(0~10만입력가능)"
        onChange={onChangeNight}
        value={night}
      />
      <input
        type="text"
        placeholder="폰 갯수 입력(0~10만입력가능)"
        onChange={onChangePawn}
        value={pawn}
      />
      <button onClick={sum}>계산</button>
      <div>킹:{1 - king}</div>
      <div>퀸:{1 - queen}</div>
      <div>룩:{2 - rook}</div>
      <div>비숍:{2 - bishop}</div>
      <div>나이트:{2 - night}</div>
      <div>폰:{8 - pawn}</div>
    </>
  );
};
export default Chess;
