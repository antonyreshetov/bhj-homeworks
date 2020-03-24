let cookie = document.getElementById("cookie");
let counter = document.getElementById("clicker__counter");

function clikcCount() {
    counter.textContent = Number(counter.textContent) + 1;
}

function cookieMaxSize() {
    cookie.width = 300;
}

function cookieMinSize() {
    cookie.width = 200;
}

function addClick() {
    clikcCount();

    if (counter.textContent % 2 == 1) {
      cookieMaxSize();
    } else {
      cookieMinSize();
    }
}

cookie.onclick = addClick;

// таймер обязатель доделаю позже, очень сильно отстал((
