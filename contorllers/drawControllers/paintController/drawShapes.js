import { ctx } from "../../elements/elements.js";
import { drawVariables } from "../../elements/drawVariables.js";

export const drawRect = (e) => {
  drawVariables.active
    ? ctx.fillRect(
        e.offsetX,
        e.offsetY,
        drawVariables.prevmouseX - e.offsetX,
        drawVariables.prevmouseY - e.offsetY
      )
    : ctx.strokeRect(
        e.offsetX,
        e.offsetY,
        drawVariables.prevmouseX - e.offsetX,
        drawVariables.prevmouseY - e.offsetY
      );
};

export const drawTreeangle = (e) => {
  ctx.beginPath();
  ctx.moveTo(drawVariables.prevmouseX, drawVariables.prevmouseY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.lineTo(drawVariables.prevmouseX * 2 - e.offsetX, e.offsetY);
  ctx.closePath();
  drawVariables.active == true ? ctx.fill() : ctx.stroke();
};

export const drawCircle = (e) => {
  ctx.beginPath();
  const radius = Math.sqrt(
    (drawVariables.prevmouseX - e.offsetX) ** 2 +
      (drawVariables.prevmouseY - e.offsetY) ** 2
  );
  ctx.arc(
    drawVariables.prevmouseX,
    drawVariables.prevmouseY,
    radius,
    0,
    Math.PI * 2
  );
  drawVariables.active == true ? ctx.fill() : ctx.stroke();
};

export const drawLine = (e) => {
  ctx.beginPath();
  ctx.moveTo(drawVariables.prevmouseX, drawVariables.prevmouseY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
};
