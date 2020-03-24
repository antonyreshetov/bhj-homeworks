const start = function startTimer() {
    const timer = document.getElementById('timer');
    if (Number(timer.textContent) > 0) {
      timer.textContent -= 1;
    } else {
      clearInterval(interval);
      alert("Вы победили в конкурсе");
    }
}

interval = setInterval(start, 1000);
