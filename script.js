let keysArray = Array.from(document.getElementsByClassName("button"));
document.addEventListener('keydown', pressed);
function pressed(item) {
  let keyPressed = document.querySelector(`div[data-key='${item.keyCode}']`);
  let audio = document.querySelector(`audio[data-key="${item.keyCode}"]`);
  if (!keyPressed) {
    return;
  }
  keyPressed.classList.add('pressed');
  audio.currentTime = 0;
  audio.volume = 0.4;
  audio.play();
  setTimeout(() => keyPressed.classList.remove('pressed'), 100)
}

keysArray.forEach((key) => key.addEventListener('click', clicked));
function clicked() {
  let audio = document.querySelector(`audio[data-key='${parseInt(this.dataset.key)}']`);
  this.classList.add('pressed');
  audio.currentTime = 0;
  audio.volume = 0.4;
  audio.play();
  setTimeout(() => this.classList.remove('pressed'), 100);
}
