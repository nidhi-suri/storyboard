const homeBoard = document.getElementById("home");
const guestBoard = document.getElementById("guest");

function add(value, user) {
  if (user === "home") {
    homeBoard.innerText = +homeBoard.innerText + value;
  } else {
    guestBoard.innerText = +guestBoard.innerText + value;
  }
}

function reset(user) {
  if (user === "home") homeBoard.textContent = 0;
  else guestBoard.textContent = 0;
}
