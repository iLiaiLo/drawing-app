import { drawVariables } from "../elements/drawVariables.js";
import { eraser } from "../elements/elements.js";
// This controller sets the selected tool to eraser when called
export const eraserController = () => {
  drawVariables.selectedtool = eraser.id;
};
