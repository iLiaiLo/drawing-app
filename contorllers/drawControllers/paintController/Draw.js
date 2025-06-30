import { ctx, canvas, color, textElement } from "../../elements/elements.js";
import { drawCircle, drawLine, drawRect, drawTreeangle } from "./drawShapes.js";
import { drawVariables } from "../../elements/drawVariables.js";

export const fillColor = () => {
  textElement.textContent = drawVariables.active
    ? "fill figure"
    : "unfill figure";
  drawVariables.active = !drawVariables.active;
};

export const startDrawing = (e) => {
  drawVariables.isdrawing = true;
  drawVariables.prevmouseX = e.offsetX;
  drawVariables.prevmouseY = e.offsetY;
  ctx.beginPath();

  ctx.lineWidth = range.value;
  ctx.strokeStyle = color.value;
  ctx.fillStyle = color.value;

  drawVariables.snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
};

export const drawing = (e) => {
  if (!drawVariables.isdrawing) {
    return;
  }
  ctx.putImageData(drawVariables.snapshot, 0, 0);

  switch (drawVariables.selectedtool) {
    case "brush":
      ctx.strokeStyle = color.value;
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      break;
    case "eraser":
      ctx.strokeStyle = "#fff";
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      break;
    case "rectangle":
      drawRect(e);
      break;
    case "circle":
      drawCircle(e);
      break;
    case "treeangle":
      drawTreeangle(e);
      break;
    case "line":
      drawLine(e);
      break;
  }
};
