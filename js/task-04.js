function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDiv = document.querySelector('#controls');
const boxesDiv = document.querySelector('#boxes');

controlsDiv.addEventListener('click', handleButtonClick);

function handleButtonClick(event) {
  const inputValue = Number(controlsDiv.querySelector('input').value);
  const minValue = Number(controlsDiv.querySelector('input').getAttribute("min"));
  console.log("handleButtonClick ~ minValue:", minValue)
  const maxValue = Number(controlsDiv.querySelector('input').getAttribute("max"));
  console.log("handleButtonClick ~ maxValue:", maxValue)

  if (maxValue < inputValue || minValue > inputValue) {
    return;
  }

  if (event.target.hasAttribute('data-create')) {

    {createBoxes(inputValue);} 
  }
  
  if (event.target.hasAttribute('data-destroy')) {
    destroyBoxes();
  }
}

function createBoxes(amount) {
  let boxSize = 30;
  let markup = '';
  for (let i = 0; i < amount; i++) {
    markup += `<div style="width:${boxSize}px; height:${boxSize}px; 
    background-color:${getRandomHexColor()};"></div>`;
    boxSize += 10;
  }

  boxesDiv.insertAdjacentHTML("beforeend", markup);
  boxesDiv.innerHTML = markup;
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}
