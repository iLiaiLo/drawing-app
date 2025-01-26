import { drawVariables } from "../elements/drawVariables.js"
import { eraser } from "../elements/elements.js";


export const eraserController=()=>{
    drawVariables.selectedtool = eraser.id;
}