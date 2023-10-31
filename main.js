const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));


var bgImages = ['Media/carinLayout.png',
'Media/sunglassesOnTable.png',
'Media/DrGlassPoster.png',
'Media/storeLeft.png',
'Media/sunglassesDisplay.png',
'Media/ThreeWithPlant.png',
'Media/twoSunglassesDown.png',
'Media/threeWithBear.png',
'Media/twoSunglasses.png'];
var counter = 0;
function bgSlideshow() {
  document.getElementById('slideshow').style.backgroundImage = 'url(' + bgImages[counter] + ')';
  if(counter < bgImages.length - 1) {
    counter++
  } else {
    counter = 0;
  }
 setTimeout(bgSlideshow, 8000);
}

window.onload = bgSlideshow();

var quotes = [
  "The eyes are the window to the soul. Our frames? The perfect frame for that window.",
  "Vision is the art of seeing what is invisible to others. - Jonathan Swift",
  "The world is a beautiful place. Make sure you see it clearly.",
  "Your style is your signature. Let our opticals be your fashion statement.",
  "Clear vision is not just a luxury; it's a necessity. We're here to make it stylish.",
  "Style is a reflection of your attitude and your personality. Our opticals are the perfect mirror.",
  "Elegance is the only beauty that never fades. Our opticals are timeless.",
  "Vision is the art of seeing what's possible. We help you see it all.",
  "Clarity in vision. Clarity in life.",
  "The world is a kaleidoscope of color and beauty. Our opticals enhance your view.",
  "Seeing is not enough; you have to feel what you see. Feel the difference with us.",
  "Frames that frame your world. We bring your vision into focus.",
  "Eyes wide open, style unlimited. Discover a new perspective with our opticals.",
  "Your eyes are precious. Your eyewear should be too.",
  "Eyes are the storytellers of our lives. Let your eyewear tell your unique story.",
  "See the world clearly, beautifully, and your way.",
  "Enhance your vision, enrich your life. Explore the world in style."
];
window.onload = function randomQuotes() {
  var idx = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[idx];
};
