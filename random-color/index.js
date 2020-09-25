let button = document.querySelector("button");
let box = document.querySelector(".box");
let box2 = document.querySelector(".box-2");

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

// function getRandomColor() {
//   let val = 9834275293487;
//   return `#${(val * Math.random()).toString(16).substr(0, 6)}`;
// }

function handleClick() {
  box.style.backgroundColor = getRandomColor();
}

function handleMouseMove() {
  box2.style.backgroundColor = getRandomColor();
}

button.addEventListener("click", handleClick);
box2.addEventListener("mousemove", handleMouseMove);
