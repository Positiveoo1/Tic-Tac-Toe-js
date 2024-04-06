let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

function cellClick(cellIndex) {
    if (gameBoard[cellIndex] === '') {
        gameBoard[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
        if (checkWin()) {
            alert(`${currentPlayer} wins!`);
            resetGame();
        } else if (gameBoard.every(cell => cell !== '')) {
            alert('It\'s a draw!');
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    return winConditions.some(condition => {
        return gameBoard[condition[0]] !== '' && gameBoard[condition[0]] === gameBoard[condition[1]] && gameBoard[condition[1]] === gameBoard[condition[2]];
    });
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    Array.from(document.getElementsByClassName('cell')).forEach(cell => cell.innerText = '');
}


function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}
