import { inputValue } from "../elements/elements.js";

export const inputValueSetter = (e) => {
  inputValue.textContent = e.target.value;
};
