const inputs = document.querySelectorAll("input");
const container = document.querySelector(".container");

inputs.forEach((input) => input.addEventListener("input", handleInput));

function handleInput({ target }) {
  const { value, name } = target;
  container.style[name] = value;

  if (name !== "flex-direction") return;
  container.dataset.mainAxis = getMainAxis(value);
}

function getMainAxis(value) {
  return value.includes("row") ? "horizontal" : "vertical";
}
