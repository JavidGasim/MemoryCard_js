let grids = document.querySelectorAll(".inside");
let images = document.getElementsByClassName("picture");

let allimg = [
  "images/bmw-logo.jpeg",
  "images/hyundai-logo.jpg",
  "images/lada-logo.jpg",
  "images/lexus-logo.jpg",
  "images/mercedes-logo.jpeg",
  "images/nissan-logo.png",
  "images/opel-logo.png",
  "images/toyota-logo.jpg",
  "images/bmw-logo.jpeg",
  "images/hyundai-logo.jpg",
  "images/lada-logo.jpg",
  "images/lexus-logo.jpg",
  "images/mercedes-logo.jpeg",
  "images/nissan-logo.png",
  "images/opel-logo.png",
  "images/toyota-logo.jpg",
];

function start() {
  grids.forEach((element) => {
    element.style.transform = "rotateY(180deg)";
    element.style.transition = "0.5s";
  });

  setTimeout(() => {
    grids.forEach((element) => {
      element.style.transform = "rotateY(0deg)";
      element.style.transition = "0.5s";
    });

    for (let i = 0; i < 16; i++) {
      images[i].src = "images/cars.jpeg";
    }
  }, 3000);

  allimg = allimg.sort(() => Math.random() - 0.5);

  for (let i = 0; i < 16; i++) {
    images[i].src = allimg[i];
    images[i].style.transform = "rotateY(180deg)";
    images[i].style.transition = "0.5s";
  }
}

var num = 0;
var b;

function OpenClick(id) {
  var a = document.getElementById(`${id}`);
  var index = parseInt(id);
  a.src = allimg[index - 1];
  a.style.transform = "rotateY(0deg)";
  a.style.transition = "0.5s";
  num++;
  if (num % 2 != 0) {
    b = a.src;
  }

  if (num % 2 == 0) {
    if (a.src != b) {
      a.src = "images/cars.jpeg";
      a.style.transform = "rotateY(180deg)";
      a.style.transition = "0.5s";
      for (let i = 0; i < 16; i++) {
        if (b == images[i].src) {
          images[i].src = "images/cars.jpeg";
          images[i].style.transform = "rotateY(180deg)";
          images[i].style.transition = "0.5s";
        }
      }
    }
  }
}
