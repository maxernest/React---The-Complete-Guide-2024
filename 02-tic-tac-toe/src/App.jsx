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

function isFinish(turns) {
  if (turns.length < 5) {
    return null;
  }
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const gameBoard = initialGameBoard;

  turns.forEach((turn) => {
    gameBoard[turn.row][turn.col] = turn.player == "X" ? 1 : -1;
  });

  for (let i = 0; i < 3; i++) {
    let sum = gameBoard[0][i] + gameBoard[1][i] + gameBoard[2][i];
    if (sum == 3) {
      return "X";
    } else if (sum == -3) {
      return "O";
    }

    sum = gameBoard[i][0] + gameBoard[i][1] + gameBoard[i][2];
    if (sum == 3) {
      return "X";
    } else if (sum == -3) {
      return "O";
    }
  }

  let diagonal = gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2];
  if (diagonal == 3) {
    return "X";
  } else if (diagonal == -3) {
    return "O";
  }

  diagonal = gameBoard[0][2] + gameBoard[1][1] + gameBoard[2][0];
  if (diagonal == 3) {
    return "X";
  } else if (diagonal == -3) {
    return "O";
  }
  if (turns.length == 9) {
    return "draw";
  }
  return null;
}

function getCurrentPlayer(turns) {
  let currentPlayer = "X";
  if (turns.length > 0 && turns[0].player == "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function GameContainer({ turns, handleTurns }) {
  console.log(isFinish(turns));

  return (
    <div id="game-container">
      <Players currentPlayer={getCurrentPlayer(turns)} />
      <GameBoard turns={turns} onClick={handleTurns} />
      {!isFinish(turns) || (
        <GameOver player={isFinish(turns)} handleTurns={handleTurns} />
      )}
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
    </div>
  );
}

function GameOver({ player, handleTurns }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {player == "X" || player == "O" ? <p>{player} won!</p> : <p>draw</p>}
      <button onClick={() => handleTurns(null, null)}>Rematch!</button>
    </div>
  );
}

function App() {
  const [turns, setTurns] = useState([]);

  function handleTurns(row, col) {
    if (row == null && col == null) {
      setTurns([]);
      return;
    }
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
