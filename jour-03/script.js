import Player from "./Class/Player.js";
import Board from "./Class/Board.js";

const player = new Player("X", true);

const board = new Board();
board.initializeBoard();
board.displayBoard();

const cellElements = document.querySelectorAll(".case");

cellElements.forEach((cell, index) => {
  cell.addEventListener("click", (event) => {
    event.preventDefault();
    const row = Math.floor(index / 3); // Calcule la ligne en fonction de l'indice
    const col = index % 3; // Calcule la colonne en fonction de l'indice

    if (board.placeMove(row, col, currentPlayer)) {
      board.displayBoard();

      // Alterne le joueur actif pour le prochain tour
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});
