import { drawVariables } from "../elements/drawVariables.js";

export const chooseTool = (e) => {
  if (e.target.className !== "item") return;
  drawVariables.selectedtool = e.target.id;
};
