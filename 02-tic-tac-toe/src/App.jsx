import { useState } from "react";
import TitleImage from "/game-logo.png";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
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
  const [tempName, setTempName] = useState(name);

  function onEdit() {
    setIsEdited((edit) => !edit);
  }

  function handleOnChange(event) {
    console.log(event);
    setTempName(event.target.value);
  }

  function nameSection() {
    return (
      <>
        {isEdited ? (
          <input
            type="text"
            id="fname"
            name="fname"
            value={tempName}
            onChange={handleOnChange}
          />
        ) : (
          <span className="player-name">{tempName}</span>
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
  const [gameBoard, setGameBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  function handleClick(vertical, horizontal, e) {
    console.log(e.target.innerHTML);
    setGameBoard((gameBoard) => {
      const newGameBoard = [...gameBoard];
      newGameBoard[vertical][horizontal] = "X";
      return newGameBoard;
    });
  }
  return (
    <ol id="game-board">
      {gameBoard.map((value, verticalIndex) => {
        return (
          <li>
            <ol>
              {value.map((value, horizontalIndex) => {
                return (
                  <li>
                    <button
                      onClick={(e) =>
                        handleClick(verticalIndex, horizontalIndex, e)
                      }
                    >
                      {value}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
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
