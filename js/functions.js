// PlayNow functions
function playNow() {
  getElementAndSetClass("game_start", "hidden");
  getElementAndRemoveClass("play_ground", "hidden");
  getRandomAlphaBet();
}

// Playing Now.
document.addEventListener("keyup", (event) => {
  // Get ExpectedKey.
  const expectedKey = document
    .getElementById("showLetter")
    .innerText.toLocaleLowerCase();
  // Get playerPressKey.
  const playerPressKey = event.key;

  // Compare Now.
  if (expectedKey === playerPressKey) {
    getRandomAlphaBet();
    document.getElementById(expectedKey).classList.remove("bg-[orange]");

    const updatedScore = getScoreTextValueElementById("currentScore");

    const newScore = updatedScore + 1;

    showUpdatedScore("currentScore", newScore);
  } else {
    const updateLifeScore = getLifeTextValueElementById("lifeScore");
    showUpdatedScore("lifeScore", updateLifeScore);
    if (updateLifeScore === 0) {
      getElementAndSetClass("play_ground", "hidden");
      getElementAndRemoveClass("final_score", "hidden");

      const updatedScore = getScoreTextValueElementById("currentScore");
      showUpdatedScore("finalScoreShow", updatedScore);
    }
  }
});

// Play Again.
function playAgain() {
  // Show playGround.
  getElementAndRemoveClass("play_ground", "hidden");

  // Hide Score Page.
  getElementAndSetClass("final_score", "hidden");

  const getScoreDefault = document.getElementById("currentScore");
  getScoreDefault.innerText = 0;
  const getLifeDefault = document.getElementById("lifeScore");
  getLifeDefault.innerText = 5;
  console.log("OK");
}
