const images = ["background1.png"];
// const images = ["background1.png", "background2.jpg", "background3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url(img/${chosenImage})`;
