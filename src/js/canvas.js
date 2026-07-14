/* DOCUMENTO BASE
  http://www.linhadecodigo.com.br/artigo/3608/html5-canvas-movendo-objetos.aspx 
*/


export default function CanvasEdit() {
  var canvas;
  var ctx;
  var dx = 5;
  var dy = 5;
  var x = 250;
  var y = 100;
  var WIDTH = 500;
  var HEIGHT = 200;

  function Desenhar() {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2, true);
    ctx.fill();
  }

  // limpa a area retangular antes que o circulo seja redesenhado
  function LimparTela() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.rect(0, 0, WIDTH, HEIGHT);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  function KeyDown(event) {
    switch (event.keyCode) {
      case 38: /* seta para cima */
        if (y - dy > 0) {
          y -= dy;
        }
        break;
      case 40: /* seta para baixo */
        if (y + dy < HEIGHT) {
          y += dy;
        }
        break;
      case 37: /* seta para esquerda */
        if (x - dx > 0) {
          x -= dx;
        }
        break;
      case 39: /* seta para direita */
        if (x + dx < WIDTH) {
          x += dx;
        }
        break;
    }
  }


  /*De fato a função foi definida mas ainda não está diretamente relacionada ao evento keyDown do documento. Isso será feito mais adiante, após a definição de todas as funções a serem utilizadas.
  A próxima função apresentada se chama Atualizar e é responsável por chamar as funções LimparTela e Desenhar, nessa ordem. */
  function Atualizar() {
    LimparTela();
    Desenhar();
  }

  function Iniciar() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    return setInterval(Atualizar, 10);
  }

  window.addEventListener('keydown', KeyDown, true);
  Iniciar();

}