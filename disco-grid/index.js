let boxes = document.querySelector(".boxes");

function getRandomNumber(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

function getRandomColor() {
  let charArr = "0123456789abcdef".split("");
  let max = 6;
  let color = "#";

  for (let i = 0; i < max; i++) {
    let randomIndex = Math.floor(Math.random() * 16);
    color = color + charArr[randomIndex];
  }

  return color;
}

function createBox() {
  let div = document.createElement("div");
  div.classList.add("box");
  div.style.backgroundColor = getRandomColor();
  let h3 = document.createElement("h3");
  h3.innerText = getRandomNumber(500);
  div.append(h3);

  return div;
}

for (let i = 0; i < 500; i++) {
  boxes.append(createBox());
}

function changeBoxes() {
  let allBoxes = document.querySelectorAll(".box");

  allBoxes.forEach((box) => {
    box.style.backgroundColor = getRandomColor();
    box.children[0].innerText = getRandomNumber(500);
  });
}

boxes.addEventListener("mousemove", changeBoxes);
