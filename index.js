import { loadCanva } from "./contorllers/drawControllers/windowController/loadCanvaController.js";
import {
  cl,
  fillcolor,
  canvas,
  eraser,
  tools,
  thicknessSetter,
  downloadBtn,
} from "./contorllers/elements/elements.js";
import {
  drawing,
  fillColor,
  startDrawing,
} from "./contorllers/drawControllers/paintController/Draw.js";
import { chooseTool } from "./contorllers/toolsControllers/chooseTools.js";
import { eraserController } from "./contorllers/toolsControllers/eraserController.js";
import { clearCanva } from "./contorllers/toolsControllers/clearCanvaController.js";
import { stopDrawing } from "./contorllers/drawControllers/windowController/stopDrawController.js";
import { inputValueSetter } from "./contorllers/toolsControllers/inputController.js";
import downloadImage from "./contorllers/downloadController/downloadCanva.js";

window.addEventListener("load", loadCanva);

tools.addEventListener("click", chooseTool);
thicknessSetter.addEventListener("input", inputValueSetter);
fillcolor.addEventListener("click", fillColor);
cl.addEventListener("click", clearCanva);
eraser.addEventListener("click", eraserController);

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", drawing);
window.addEventListener("mouseup", stopDrawing);
downloadBtn.addEventListener("click", downloadImage);
