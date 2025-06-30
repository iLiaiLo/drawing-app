import { canvas, ctx } from "../../elements/elements.js";

export const loadCanva = () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  ctx.fillStyle = "#ffffff"; // set white color as background
  ctx.fillRect(0, 0, canvas.width, canvas.height); // this fills the canvas with white color
};
//here we set canva's offsetX and offsetHeigth values instead of whole window.
