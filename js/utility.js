// GetElement and setClassList
function getElementAndSetClass(elementId, className) {
  const element = document.getElementById(elementId);
  element.classList.add(className);
}

// GetElement and removeClassList
function getElementAndRemoveClass(elementId, className) {
  const element = document.getElementById(elementId);
  element.classList.remove(className);
}

// Get randomLetter by generate random number with an array and show this letter in playGround Display.
function getRandomAlphaBet() {
  const alphaBetString = "abcdefghijklmnopqrstuvwxyz/";
  const getAlphaBetLetterArray = alphaBetString.split("");

  // Generate random number.
  const randomIndex = Math.round(Math.random() * 26);

  // Now find letter an array by indexNumber.
  const getCurrentLetter = getAlphaBetLetterArray[randomIndex];

  // Show the letter in display.
  const getDisplayArea = document.getElementById("showLetter");
  getDisplayArea.innerText = getCurrentLetter.toUpperCase();

  // Now SetBackgroundColor CurentLetter.
  document.getElementById(getCurrentLetter).classList.add("bg-[orange]");
}

// Update Score
function getScoreTextValueElementById(elementId) {
  const getElement = document.getElementById(elementId);
  const currentValue = getElement.innerText;
  return parseInt(currentValue);
}

// Update Life
function getLifeTextValueElementById(elementId) {
  const getDomElement = document.getElementById(elementId);
  const getTextValue = getDomElement.innerText;
  const convertNumber = parseInt(getTextValue);
  return convertNumber - 1;
}

// SetUpdate Score and Life.
function showUpdatedScore(elementId, score) {
  const getShowElement = document.getElementById(elementId);
  getShowElement.innerText = score;
}
