function myChangeBackgroundColor() {
  let page = document.getElementById("page");

  if (window.screen.width >= 1337) {
    page.style.backgroundColor = "#ffb703";
  } else if (window.screen.width < 1337 && window.screen.width >= 505) {
    page.style.backgroundColor = "#d90429";
  } else if (window.screen.width >= 504) {
    page.style.backgroundColor = "#003049";
  }
}

window.addEventListener("resize", myChangeBackgroundColor);
