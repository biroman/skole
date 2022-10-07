import FootballPlayerModule from "./FootballPlayerModule.js";

const playerNameInput = document.querySelector("#player-name-input");
const playerNameOutput = document.querySelector("#player-name");
const playerAgeOutput = document.querySelector("#player-age");
const playerHeightOutput = document.querySelector("#player-height");
const playerClubOutput = document.querySelector("#player-club");
const playerImgOutput = document.querySelector("#player-img");
const updatePlayerBtn = document.querySelector("#update-player-btn");
const findPlayerBtn = document.querySelector("#find-player-btn");
const addedPlayerOutput = document.querySelector("#added-player-output");
const playerNameInputText = document.querySelector("#player-name-input-text");
const updatePlayerBtnText = document.querySelector("#update-player-btn-text");

const getPlayerByName = () => {
  if (!playerNameInput.value) {
    playerNameInputText.innerHTML = `
            <p class="text-danger">You have to choose a player before trying to edit!</p>
        `;
  } else {
    playerNameInputText.innerHTML = "";
    const name = playerNameInput.value;
    const player = FootballPlayerModule.getPlayerByName(name);
    playerNameOutput.value = player.name;
    playerAgeOutput.value = player.age;
    playerHeightOutput.value = player.height;
    playerClubOutput.value = player.club;
    playerImgOutput.value = player.image;
  }
};

const updateGame = () => {
  if (!playerAgeOutput.value || !playerHeightOutput.value || !playerClubOutput.value || !playerImgOutput) {
    updatePlayerBtnText.innerHTML = `
    <p class="text-danger">You need to select a player before updating something!</p>
    `;
  } else {
    const name = playerNameOutput.value;
    const age = parseInt(playerAgeOutput.value);
    const height = parseInt(playerHeightOutput.value);
    const club = playerClubOutput.value;
    const img = playerImgOutput.value;
    FootballPlayerModule.updateTitle(name, age, height, club, img);
    updatePlayerBtnText.innerHTML = `
    <p class="text-success">${name}, was updated!</p>
    `;
  }
};

findPlayerBtn.addEventListener("click", getPlayerByName);
updatePlayerBtn.addEventListener("click", () => updateGame());

//Legger automatisk til alle navnene som ligger i localstorage inn i dropdown menyen.
(() => {
  const arrayInLocalStorage = JSON.parse(localStorage.getItem("players"));
  const arrayForPlayers = arrayInLocalStorage;
  for (let i = 0; i < arrayForPlayers.length; i++) {
    const playerName = Object.values(arrayForPlayers)[i].name;
    playerNameInput.innerHTML += `<option value="${playerName}">${playerName}</option>`;
  }
})();
