function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("div#boxes");

const destroyBoxes = () => {
  [...boxes.children].forEach(child => child.remove());

};

const createBoxes = (amount) => {
  console.log(amount);

  const BASE_SIZE = 30;
  const SIZE_RATIO = 10;

  const freshBoxes = Array.from({ length: amount }, (_, i) => {
    const size = `${BASE_SIZE + (i + boxes.children.length) * SIZE_RATIO}px`;

    const box = document.createElement("div");
    box.style.width = size; 
    box.style.height = size;
    box.style.backgroundColor = getRandomHexColor();

    return box;
});

const fragment = document.createDocumentFragment();
fragment.append(...freshBoxes);

boxes.prepend(fragment);

};

document.querySelector("button[data-create]").addEventListener("click", () => {
  const input = document.querySelector("input");
  const amount = parseInt(input.valueAsNumber, 10);

  if (amount < 1 || amount > 100) {
    alert("Amount must be between 1 and 100.");
    return;
  }

  createBoxes(amount);
  input.value = "";
});

document.querySelector("button[data-destroy]").addEventListener("click", destroyBoxes);
