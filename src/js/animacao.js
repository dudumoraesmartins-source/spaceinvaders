const adiv = document.getElementById('mydiv');
let leftpos = 0;

function movediv(timestamp) {
  leftpos += 1;
  adiv.style.left = leftpos + 'px';

  // callback - chama a funcao para permanecer em loop
  requestAnimationFrame(movediv);
}

requestAnimationFrame(movediv);