function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

$(document).ready(function() {
  let wave = document.querySelector(".stroke-1");
  let links = document.querySelectorAll("a");
  setInterval(function() {
    let color = `rgb(${getRandomInt(100, 255)},${getRandomInt(100,255)},${getRandomInt(100,255)})`;
    wave.setAttribute("fill", color);
    links.forEach(link => {
      if (!link.classList.contains("a-no-color")) {
        link.style.color = color
      }
    });
  }, 3000);
});
