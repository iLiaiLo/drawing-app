const cl = document.getElementById("clear");
const color = document.getElementById("color");
const range = document.getElementById("range");
const fillcolor = document.getElementById("fill");
const canvas = document.getElementById("canva");
const eraser = document.getElementById("eraser");
const textElement = document.getElementById("fillContentText");

const inputValue = document.getElementById("inputValue");

const thicknessSetter = document.getElementById("range");

const ctx = canvas.getContext("2d", { willReadFrequently: "true" });

const tools = document.querySelector(".cont");

const downloadBtn = document.getElementById("download-image");

export {
  cl,
  color,
  range,
  fillcolor,
  canvas,
  eraser,
  ctx,
  tools,
  textElement,
  inputValue,
  thicknessSetter,
  downloadBtn,
};
