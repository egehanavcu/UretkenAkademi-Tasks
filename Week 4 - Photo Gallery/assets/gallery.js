const images = document.querySelector(".images");
const imagesList = [];

const generateImageArea = function (i) {
  const emptyImage = document.createElement("div");
  emptyImage.className = "image";
  emptyImage.id = "image-" + i;
  emptyImage.style.backgroundColor =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
  images.appendChild(emptyImage);
};

const loadImage = function (i) {
  var img = document.createElement("img");
  img.src = "https://source.unsplash.com/random/200x200?" + i;
  document.querySelector("#image-" + i).appendChild(img);
};

for (let i = 1; i <= 15; i++) {
  generateImageArea(i);
}

for (let i = 1; i <= 15; i++) {
  loadImage(i);
}
