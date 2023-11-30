"use strict";

class Image {
  getRandomImage() {
    document.body.innerHTML = "";

    const randomNumber = Math.floor(Math.random() * 9) + 1;
    const div = document.createElement("div");
    div.style.cssText = "width: 500px; height: 500px; overflow: hidden;";

    document.body.style.cssText = "margin: 0; height: 100vh; display: flex; justify-content: center; align-items: center;";
    document.body.insertBefore(div, document.body.firstChild);

    const img = document.createElement("img");
    img.style.cssText = "width: 100%; height: 100%;";
    img.setAttribute("alt", "Картинка");
    img.setAttribute("src", `../images/${randomNumber}.jpg`);

    div.appendChild(img);
  }
}

const myImage = new Image();
myImage.getRandomImage();

// const anotherImage = new Image();
// anotherImage.getRandomImage();
