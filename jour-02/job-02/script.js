function myAddCount() {
  const countDisplayer = document.querySelector("#count-displayer");
  const btn = document.querySelector("#add-count-btn");
  let count = 0;

  btn.addEventListener("click", async (event) => {
    event.preventDefault();
    count++;
    countDisplayer.innerHTML = count;
  });
}

myAddCount();
