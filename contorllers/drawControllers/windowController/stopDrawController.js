import { drawVariables } from "../../elements/drawVariables.js";
// This function stops the drawing process by setting isdrawing to false

export const stopDrawing = () => (drawVariables.isdrawing = false);
