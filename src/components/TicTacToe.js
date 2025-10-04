import useTicTacToe from '../hooks/useTicTacToe';
import "./TicTacToe.css";

function TicTacToe() {
  const { board, handleClick, resetGame, getStatusMessage, winningLine } = useTicTacToe();

  const isWinningCell = (index) => winningLine && winningLine.includes(index);

  return (
    <div className="game">
      <div className='status'>
        {getStatusMessage()}
        <button className='reset-button' onClick={resetGame}>Reset Game</button>
      </div>
      <div className='board'>
        {board.map((b, index) => (
          <button
            className={`cell ${isWinningCell(index) ? "winning-cell" : ""}`}
            key={index}
            onClick={() => handleClick(index)}
            disabled={b !== null}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TicTacToe;
