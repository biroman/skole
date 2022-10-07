import footballplayermodule from "./footballplayermodule";
const showAllGrid = document.querySelector("#grid-show-all");
const showAllBtn = document.querySelector("#show-all-btn");
const darkModeBtn = document.querySelector("#dark-mode-btn");
const bodyDarkMode = document.querySelector("body");
const modalWindow = document.querySelector("#modalWindow");
const clearlocalStorageBtn = document.querySelector("#clear-local-storage-btn");

let btnShowAllToggle = false;
let btnDarkmodeToggle = true;

const showAllPlayers = (array) => {
  let htmlTxt = "";

  if (btnShowAllToggle) {
    hideAllPlayers();
  } else {
    array.forEach((player) => {
      htmlTxt += `
        <div class="col bg-gradient">  
          <img id="player-img" class="card-img-top" src="./images/${player.image}"/>  
          <div class="card-body">
            <h3>${player.name}</h3>
            <h5>Age:</h5> <p>${player.age}</p>
            <h5>Height:</h5> <p>${player.height}cm</p>
            <h5>Football Club:</h5> <p>${player.club}</p>
          </div> 
        </div>
            `;
    });
    showAllGrid.innerHTML += htmlTxt;

    btnShowAllToggle = true;
    showAllBtn.className = "btn btn-lg btn-danger mb-3";
    showAllBtn.innerHTML = `<i class="fa-regular fa-eye-slash"></i> HIDE ALL PLAYERS`;
  }
};

const hideAllPlayers = () => {
  showAllGrid.innerHTML = "";
  showAllBtn.className = "btn btn-lg btn-primary mb-3";
  showAllBtn.innerHTML = `<i class="fa-regular fa-eye"></i> SHOW ALL PLAYERS`;
  btnShowAllToggle = false;
};

//Funksjon som endrer klasser sånn at det er mulig ha dark/light mode
const darkMode = () => {
  if (btnDarkmodeToggle) {
    bodyDarkMode.className = "";
    darkModeBtn.className = "btn btn-dark";
    darkModeBtn.innerHTML = `<i class="fa-solid fa-circle-half-stroke"></i> Dark mode`;

    modalWindow.classList.remove("bg-dark");
    btnDarkmodeToggle = false;
  } else {
    bodyDarkMode.className = "bg-dark text-white";
    darkModeBtn.className = "btn btn-light";
    darkModeBtn.innerHTML = `<i class="fa-solid fa-circle-half-stroke"></i> Light mode`;

    modalWindow.classList.add("bg-dark");
    btnDarkmodeToggle = true;
  }
};

showAllBtn.addEventListener("click", () => showAllPlayers(footballplayermodule.getAll()));

darkModeBtn.addEventListener("click", () => darkMode());

clearlocalStorageBtn.addEventListener("click", () => footballplayermodule.removePlayers());

(() => {
  footballplayermodule.checkIfArrayExists();
})();
