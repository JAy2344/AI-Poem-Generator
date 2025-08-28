function displayPoem(response) {
    new Typewriter("#poem-container", {
  strings: response.data.answer,
  autoStart: true,
  delay:1,
});
}



function generatePoem(event) {
    event.preventDefault();
  


let userInput = document.querySelector("#userInput");
let ApiKey="ad28f3a0557d8t5f574o89b184356e5a";
let context="You are a helpful assistant that generates beautiful poems based on a given topic.";
let prompt=`Write a poem about ${userInput.value} in 4 lines.`;
let ApiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${ApiKey}`;

console.log("Generating poem about: " + userInput.value);
console.log(`prompt: ${prompt}`);
console.log(`context: ${context}`);
axios.get(ApiUrl).then(displayPoem);

}

let poemFormElement = document.querySelector('.poem-generator');
poemFormElement.classList.remove("hidden");
poemFormElement.addEventListener("submit", generatePoem);