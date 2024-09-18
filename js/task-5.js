function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const btn = document.getElementById('change');
btn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
});