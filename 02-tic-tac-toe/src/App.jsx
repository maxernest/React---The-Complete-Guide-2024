import { useState } from "react";
import TitleImage from "/game-logo.png";
function Header() {
  return (
    <header>
      <img src={TitleImage} />
      <h1>Tic-Tac-Toe</h1>
    </header>
  );
}

function Player({ name, symbol }) {
  const [isEdited, setIsEdited] = useState(false);

  function onEdit() {
    setIsEdited((edit) => !edit);
  }

  function nameSection() {
    return (
      <>
        {isEdited ? (
          <input type="text" id="fname" name="fname" defaultValue={name} />
        ) : (
          <span className="player-name">{name}</span>
        )}
      </>
    );
  }

  return (
    <li className="player">
      {nameSection()}
      <span className="player-symbol">{symbol}</span>
      <button onClick={onEdit}>{isEdited ? "save" : "edit"}</button>
    </li>
  );
}

function Players({ player }) {
  return (
    <ol id="players">
      <Player name={player[0]} symbol="X" />
      <Player name={player[1]} symbol="O" />
    </ol>
  );
}

function GameBoard() {
  return (
    <div id="game-board">
      <ol>
        <button>x</button>
        <button>x</button>
        <button>x</button>

        <button>x</button>
        <button>x</button>
        <button>x</button>

        <button>x</button>
        <button>x</button>
        <button>x</button>
      </ol>
    </div>
  );
}

function GameContainer() {
  const [player, setPlayer] = useState(["test", "two"]);

  return (
    <div id="game-container">
      <Players player={player} />
      <GameBoard />
      {/* <GameOver /> */}
    </div>
  );
}

function Logs() {
  return (
    <div id="log">
      <li>tes</li>
    </div>
  );
}

function GameOver() {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>tes won!</p>
      <button>Rematch!</button>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <GameContainer />
      <Logs />
    </>
  );
}

export default App;
