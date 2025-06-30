import { ctx, canvas } from "../elements/elements.js";
export const clearCanva = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff"; // Set the canvas background color to white
  ctx.fillRect(0, 0, canvas.width, canvas.height); //reset canvas context
};
// This function clears the entire canvas by filling it with a transparent color
