const footballplayermodule = (() => {
  const footballPlayers = [
    {
      name: "Erling Haaland",
      age: 22,
      height: 194,
      club: "Manchester City",
      image: "erling.png",
    },
    {
      name: "Ronaldinho Gaúcho",
      age: 42,
      height: 182,
      club: "Barcelona",
      image: "ronaldinho.png",
    },
    {
      name: "Martin Ødegaard",
      age: 23,
      height: 178,
      club: "Arsenal",
      image: "martin.png",
    },
    {
      name: "Zlatan Ibrahimović",
      age: 40,
      height: 195,
      club: "Inter Milan",
      image: "zlatan.png",
    },
  ];

  const players = "players";

  const getAll = () => {
    return checkIfArrayExists();
  };

  const getPlayerByName = (name) => {
    const gameArray = checkIfArrayExists();
    return gameArray.find((player) => player.name === name);
  };

  const removePlayers = () => {
    if (localStorage.getItem("players")) {
      localStorage.removeItem("players");
      alert("Successfully cleared the local storage!");
      window.location.reload();
    } else {
      alert("Local storage is already empty!");
    }
  };

  const addPlayer = (newPlayer) => {
    const playerArray = checkIfArrayExists();
    playerArray.push(newPlayer);
    localStorage.setItem(players, JSON.stringify(playerArray));
  };

  const checkIfArrayExists = () => {
    let localStoragePlayers = footballPlayers;

    if (localStorage.getItem(players) != null) {
      const playerArray = JSON.parse(localStorage.getItem(players));
      return playerArray;
    } else {
      let stringifiedArray = JSON.stringify(localStoragePlayers); //Gjør array om til plane tekst
      const test = localStorage.setItem("players", stringifiedArray);
      return test; //Setter den teksten inn i local storage
    }
  };

  const updateTitle = (name, age, height, club, image) => {
    const playerArray = checkIfArrayExists();
    const playerToUpdate = playerArray.find((player) => player.name === name);
    playerToUpdate.age = age;
    playerToUpdate.height = height;
    playerToUpdate.club = club;
    playerToUpdate.image = image;
    localStorage.setItem(players, JSON.stringify(playerArray));
  };

  return {
    getAll,
    addPlayer,
    removePlayers,
    checkIfArrayExists,
    updateTitle,
    getPlayerByName,
  };
})();

export default footballplayermodule;
//
