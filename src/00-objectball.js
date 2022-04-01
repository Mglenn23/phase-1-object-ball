function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },

    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}
function homeTeamName() {
  return gameObject()["home"]["teamName"];
}
let game = gameObject();
function numPointsScored(plName) {
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    let data = teamObj.players[plName];
    if (data === undefined) {
    } else {
      return data.points;
    }
  }
}

function shoeSize(plName) {
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    // console.log(teamObj)
    let data = teamObj.players[plName];
    if (data === undefined) {
    } else {
      return data.shoe;
    }
  }
}

function teamColors(tamName) {
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    // console.log(teamObj)
    let data = teamObj;
    if (data.teamName === tamName) {
      return data.colors;
    }
  }
}

function teamNames() {
  const arr = [];
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    // console.log(teamObj)
    let data = teamObj;
    //console.log(teamObj.teamName)
    arr.push(teamObj.teamName);
  }
  return arr;
}

function playerNumbers(tamName) {
  let newArr = [];
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    let data = teamObj.teamName;

    if (data === tamName) {
      const ab = Object.keys(teamObj.players);

      for (let i = 0; i < ab.length; i++) {
        newArr.push(teamObj.players[ab[i]].number);
        //console.log(ab)
      }
    }
  }
  return newArr;
}

function playerStats(plyName) {
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    // console.log(teamObj)
    let data = teamObj.players[plyName];
    if (data === undefined) {
    } else {
      return data;
    }
  }
}

function playerWithLongestName() {
  let newArr = [];
  let newArrCombine = [];
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    // console.log(teamObj)
    const ab = Object.keys(teamObj.players);
    newArr.push(ab);
  }

  for (let i = 0; i < newArr.length; i++) {
    newArrCombine = newArrCombine.concat(newArr[i]);
  }
  function longest_str_in_array(arra) {
    let max_str = arra[0].length;
    let ans = arra[0];
    for (let i = 1; i < arra.length; i++) {
      let maxi = arra[i].length;
      if (maxi > max_str) {
        ans = arra[i];
        max_str = maxi;
      }
    }
    return ans;
  }
  return longest_str_in_array(newArrCombine);
}
function getPlayer() {
  let newArr = [];
  let newArrCombine = [];
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    const ab = Object.keys(teamObj.players);
    newArr.push(ab);
  }
  for (let i = 0; i < newArr.length; i++) {
    newArrCombine = newArrCombine.concat(newArr[i]);
  }
  return newArrCombine;
}

function playerSteals(tamName) {
  let newArr = [];
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    let data = teamObj.teamName;

    if (data === tamName) {
      const ab = Object.keys(teamObj.players);

      for (let i = 0; i < ab.length; i++) {
        newArr.push(teamObj.players[ab[i]].steals);
      }
    }
  }
  return newArr;
}
function checkMostSteal() {
  const arrTeam = [];
  const arrSteals = [];
  let newArrCombine = [];
  for (let gameKey in game) {
    let teamObj = game[gameKey];

    teamNme = teamObj.teamName;
    arrTeam.push(teamNme);
  }

  for (let i = 0; i < arrTeam.length; i++) {
    arrSteals.push(playerSteals(arrTeam[i]));
  }
  for (let i = 0; i < arrSteals.length; i++) {
    newArrCombine = newArrCombine.concat(arrSteals[i]);
  }
  return Math.max(...newArrCombine);
}

function doesLongNameStealATon() {
  const namePlayerLongest = playerWithLongestName();
  const statsPlayerLongest = playerStats(namePlayerLongest);
  if (statsPlayerLongest.steals === checkMostSteal()) {
    return true;
  } else {
    return false;
  }
}

function mostPointsScored() {
  let arr = [];
  let mostPointPlayer;

  let player = getPlayer();
  for (let i = 0; i < player.length; i++) {
    arr.push(numPointsScored(player[i]));
  }
  for (let i = 0; i < player.length; i++) {
    if (numPointsScored(player[i]) === Math.max(...arr)) {
      arrPlayer = player[i];
    }
  }
  return mostPointPlayer;
}

function findScorePointTeams(tamName) {
  let newArr = [];
  for (let gameKey in game) {
    let teamObj = game[gameKey];
    let data = teamObj.teamName;

    if (data === tamName) {
      const ab = Object.keys(teamObj.players);

      for (let i = 0; i < ab.length; i++) {
        newArr.push(teamObj.players[ab[i]].points);
      }
    }
  }
  return Math.max(...newArr);
}
function winningTeam() {
  let arr = [];
  let teamName = teamNames();
  let winningName;
  for (let i = 0; i < teamName.length; i++) {
    arr.push(findScorePointTeams(teamName[i]));
  }
  if (arr[0] > arr[1]) {
    arr = arr[0];
  } else {
    arr = arr[1];
  }
  for (let i = 0; i < teamName.length; i++) {
    if (arr === findScorePointTeams(teamName[i])) {
      winningName = teamName[i];
    }
  }
  return winningName;
}
