//your JS code here. If required.
 let player1, player2, currentPlayer, moves;
        const board = document.getElementById("board");
        const message = document.getElementById("message");
        const submitBtn = document.getElementById("submit");
        const cells = document.querySelectorAll(".cell");
        const winningCombos = [
            [1, 2, 3], [4, 5, 6], [7, 8, 9],
            [1, 4, 7], [2, 5, 8], [3, 6, 9],
            [1, 5, 9], [3, 5, 7]
        ];
 submitBtn.addEventListener("click", function() {
            player1 = document.getElementById("player-1").value || "Player 1";
            player2 = document.getElementById("player-2").value || "Player 2";
            currentPlayer = player1;
            moves = {};
            document.getElementById("player-form").classList.add("hidden");
            document.getElementById("game").classList.remove("hidden");
            message.textContent = `${currentPlayer}, you're up!`;
        });

        cells.forEach(cell => {
            cell.addEventListener("click", function() {
                if (!cell.textContent && !message.textContent.includes("won")) {
                    const symbol = currentPlayer === player1 ? "X" : "O";
                    cell.textContent = symbol;
                    moves[cell.id] = symbol;
                    
                    if (checkWin(symbol)) {
                        message.textContent = `${currentPlayer}, congratulations you won!`;
                    } else if (Object.keys(moves).length === 9) {
                        message.textContent = "It's a draw!";
                    } else {
                        currentPlayer = currentPlayer === player1 ? player2 : player1;
                        message.textContent = `${currentPlayer}, you're up!`;
                    }
                }
            });
        });

        function checkWin(symbol) {
            return winningCombos.some(combo => 
                combo.every(id => moves[id] === symbol)
            );
        }