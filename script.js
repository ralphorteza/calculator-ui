window.addEventListener('keydown', function(e) {
  //const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const pressedKey = e.key;
  const key = this.document.querySelector('.key ' + pressedKey);
  
  //if (!audio) { return; }
  //audio.currentTime = 0; // Rewind on start.
  // audio.play();
  //console.log(pressedKey);
  //btn.classList.add('playing');
});

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

