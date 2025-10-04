import { useState } from 'react';

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
    const [board, setBoard] = useState(initialBoard());
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);
    const [winningLine, setWinningLine] = useState(null);

    const winningPattern = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const calculateWinner = (currentBoard) => {
        for (let i = 0; i < winningPattern.length; i++) {
            const [a, b, c] = winningPattern[i];
            if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
                setWinningLine([a, b, c]);
                return currentBoard[a];
            }
        }
        setWinningLine(null);
        return null;
    };

    const handleClick = (index) => {
        if (winner || board[index]) return;

        const newBoard = [...board];
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);

        const gameWinner = calculateWinner(newBoard);
        setWinner(gameWinner);

        setIsXNext(!isXNext);
    };

    const getStatusMessage = () => {
        if (winner) return `Player ${winner} wins`;
        if (!board.includes(null)) return `It's a draw!`;
        return `Player ${isXNext ? "X" : "O"} Turn`;
    };

    const resetGame = () => {
        setBoard(initialBoard());
        setIsXNext(true);
        setWinner(null);
        setWinningLine(null);
    };

    return { board, handleClick, getStatusMessage, resetGame, winningLine };
};

export default useTicTacToe;
