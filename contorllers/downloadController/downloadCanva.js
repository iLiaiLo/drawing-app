import { canvas } from "../elements/elements.js";

const downloadImage = () => {
  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.src = url;

    const a = document.createElement("a");
    a.href = url;
    a.download = `${Date.now()}.png`;
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });
};
export default downloadImage;
