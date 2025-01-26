import { canvas } from "../elements/elements.js";
import { drawVariables } from "../elements/drawVariables.js";

//let {selectedtool}=drawVariables;

export const chooseTool=(e)=>{
    if(e.target.className!=="item") return;
    drawVariables.selectedtool=e.target.id;
    //canvas.style.cursor="crosshair";
}