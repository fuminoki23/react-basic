import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/colorful-message";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    // setFaceShowFlag((prev) => !prev);
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num === 0) {
      faceShowFlag && setFaceShowFlag(false);
    } else if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>

      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>

      {faceShowFlag ? <div>(@ _ @)</div> : <div>(^ω^)v</div>}
    </>
  );
};

export default App;
