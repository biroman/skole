import footballplayermodule from "./footballplayermodule.js";

const playerNameInput = document.querySelector("#player-name");
const playerAgeInput = document.querySelector("#player-age");
const playerHeightInput = document.querySelector("#player-height");
const playerClubInput = document.querySelector("#player-club");
const playerImgInput = document.querySelector("#player-img");
const addPlayerBtn = document.querySelector("#add-player-btn");
const addedPlayerOutput = document.querySelector("#added-player-output");

const addNewPlayer = () => {
  const name = playerNameInput.value;
  const age = parseInt(playerAgeInput.value);
  const height = parseInt(playerHeightInput.value);
  const club = playerClubInput.value;
  const image = playerImgInput.value;

  const newPlayer = { name: name, age: age, height: height, club: club, image: image };

  if (name.length == 0 || playerAgeInput.value.length == 0 || playerHeightInput.value.length == 0 || club.length == 0) {
    addedPlayerOutput.innerHTML = `<p class="text-danger">You need to fill out all the forms!</p>`;
  } else {
    footballplayermodule.addPlayer(newPlayer);
    addedPlayerOutput.innerHTML = `
    <h5 class="text-success">You added:</h5>
    <img style="width: 10%" id="player-img-added" class="card-img-top text-center" src="./images/${image}"/>  
      <h3>${name}</h3>
    `;
  }
};

addPlayerBtn.addEventListener("click", () => addNewPlayer());
