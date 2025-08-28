function generatePoem(event) {
    event.preventDefault();
  


new Typewriter("#poem-container", {
  strings: "Pink, a color of tenderness, sweetness, and love, is found in delicate things like a rose's blush, a baby's soft skin, and the pastel glow of dawn",
  autoStart: true,
  delay:1,
});
}
let poemFormElement = document.querySelector('.poem-generator');
poemFormElement.addEventListener("submit", generatePoem);