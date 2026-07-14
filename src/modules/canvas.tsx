export default function TesteCanvas() {

  let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
  let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 80, 80);

  return (
    <div>

    </div>
  );
}