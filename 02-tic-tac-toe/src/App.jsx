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

function Player({ name, symbol, isActive }) {
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
    <li className={isActive ? "player active" : "player"}>
      {nameSection()}
      <span className="player-symbol">{symbol}</span>
      <button onClick={onEdit}>{isEdited ? "save" : "edit"}</button>
    </li>
  );
}

function Players({ currentPlayer }) {
  return (
    <ol id="players" className="highlight-player">
      <Player name="player one" symbol="X" isActive={currentPlayer == "X"} />
      <Player name="player two" symbol="O" isActive={currentPlayer == "O"} />
    </ol>
  );
}

function GameBoard({ turns, onClick }) {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const gameBoard = initialGameBoard;

  turns.forEach((turn) => {
    gameBoard[turn.row][turn.col] = turn.player;
  });

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
                      disabled={value}
                      onClick={() => onClick(verticalIndex, horizontalIndex)}
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

function getCurrentPlayer(turns) {
  let currentPlayer = "X";
  if (turns.length > 0 && turns[0].player == "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function GameContainer({ turns, handleTurns }) {
  return (
    <div id="game-container">
      <Players currentPlayer={getCurrentPlayer(turns)} />
      <GameBoard turns={turns} onClick={handleTurns} />
      {/* <GameOver /> */}
    </div>
  );
}

function Logs({ turns }) {
  return (
    <div id="log">
      {turns.map((turn) => {
        return (
          <li>
            `{turn.player} clicked {turn.row}, {turn.col}`
          </li>
        );
      })}
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
  const [turns, setTurns] = useState([]);

  function handleTurns(row, col) {
    setTurns((turns) => {
      let currentPlayer = getCurrentPlayer(turns);
      const updatedTurns = [...turns];
      updatedTurns.unshift({ row: row, col: col, player: currentPlayer });
      return updatedTurns;
    });
  }

  return (
    <>
      <Header />
      <GameContainer turns={turns} handleTurns={handleTurns} />
      <Logs turns={turns} />
    </>
  );
}

export default App;
