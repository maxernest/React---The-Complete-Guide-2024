import { useState, useRef } from "react";

export default function Player() {
  let [playerName, setPlayerName] = useState("unknown entity");
  const inputNameValue = useRef();

  function handleClick() {
    setPlayerName(inputNameValue.current.value);
    inputNameValue.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input ref={inputNameValue} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
