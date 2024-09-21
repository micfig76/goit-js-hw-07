function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const btn = document.getElementById('change');
const colorDisplay = document.getElementById('color-display');

btn.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorDisplay.textContent = `Background color: ${newColor}`;
});