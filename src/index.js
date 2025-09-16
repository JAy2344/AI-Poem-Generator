function displayPoem(response) {

  let poemElement= document.querySelector(".poem");
  poemElement.classList.remove(`hidden`);
  poemElement.innerHTML = " ";

  
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#userInput");
  let ApiKey = "ad28f3a0557d8t5f574o89b184356e5a";
  let context ="You are a helpful assistant that generates beautiful poems based on a given topic. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. include a title to the poem. do not include ```html . add a signature at the end of the poem with <br /> - Your AI Poet";
  let prompt = `Write a poem about ${userInput.value} in 4 lines.`;

  let ApiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${ApiKey}`;

  /*console.log("Generating poem about: " + userInput.value);
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);*/

  let poemElement= document.querySelector(".poem");
  poemElement.classList.remove(`hidden`);
  poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${userInput.value}</div>`;

  axios.get(ApiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector(".poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
