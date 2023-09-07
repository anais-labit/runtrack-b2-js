const textContainer = document.querySelector("#text-displayer");

function myDisplayText() {
  let input = document.querySelector("#input-text");

  input.addEventListener("input", async (event) => {
    event.preventDefault();
    textContainer.textContent = input.value;
  });
}

myDisplayText();

function myTurnBold() {
  const turnBoldBtn = document.querySelector("#turn-text-bold");

  turnBoldBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    textContainer.style.fontWeight = "900";
  });
}

myTurnBold();

function myTurnItalic() {
  const turnItalicBtn = document.querySelector("#turn-text-italic");

  turnItalicBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    textContainer.style.fontStyle = "italic";
  });
}

myTurnItalic();

function myClearText() {
  const clearTextBtn = document.querySelector("#clear-text");

  clearTextBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    textContainer.style.fontStyle = "initial";
    textContainer.style.fontWeight = "initial";
  });
}

myClearText();
