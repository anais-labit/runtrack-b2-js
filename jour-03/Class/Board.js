export default class Board {
  constructor(grid, hasWinner) {
    this.grid = grid;
    this.hasWinner = hasWinner;
  }

  initializeBoard() {
    this.grid = [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ];
    this.hasWinner = false;
  }

  displayBoard() {
    const board = document.querySelector("#board");
    board.textContent = "";

    this.grid.forEach((rowData, i) => {
      const row = document.createElement("div");
      row.setAttribute("class", "row");
      rowData.forEach((cellValue, j) => {
        const cell = document.createElement("button");
        cell.setAttribute("class", "case");
        cell.setAttribute("id", `btn-${j}-${i}`);
        cell.textContent = cellValue;
        row.appendChild(cell);
      });
      board.appendChild(row);
    });
  }

  placeMove(row, col, symbol) {
    if (this.grid[row][col] === "-") {
      this.grid[row][col] = symbol;
      return true;
    } else {
      return false;
    }
  }

  checkVictory() {}

  isFull() {}

  resetBoard() {}
}
