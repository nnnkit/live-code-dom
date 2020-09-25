// let container = document.querySelector(".container");

// function getRandomNumber(maxNum) {
//   return Math.floor(Math.random() * maxNum);
// }
// {
//   /* <div class="box">
// <h3>1</h3>
// </div> */
// }
// function createBox(num) {
//   let div = document.createElement("div");
//   div.classList.add("box");
//   let h3 = document.createElement("h3");
//   h3.innerText = num + 1;
//   div.append(h3);

//   return div;
// }

// for (let i = 0; i < 12; i++) {
//   container.append(createBox(i));
// }

// let allBoxes = document.querySelectorAll(".box");

// function handleClick(event) {
//   let h3 = event.target.querySelector("h3");
//   h3.style.display = "block";

//   setTimeout(function () {
//     h3.style.display = "none";
//   }, 5000);
// }

// allBoxes.forEach((box) => {
//   box.addEventListener("click", handleClick);
// });

let container = document.querySelector(".container");

function getRandomNumber(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

function createBox(num) {
  let div = document.createElement("div");
  div.classList.add("box");
  let h3 = document.createElement("h3");
  h3.innerText = num + 1;
  div.append(h3);

  return div;
}

for (let i = 0; i < 12; i++) {
  container.append(createBox(i));
}

function handleClick(event) {
  if (event.target.classList.contains("box")) {
    let h3 = event.target.querySelector("h3");
    h3.style.display = "block";

    setTimeout(function () {
      h3.style.display = "none";
    }, 5000);
  }
}

container.addEventListener("click", handleClick);
