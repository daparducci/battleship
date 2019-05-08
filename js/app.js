var cells = document.querySelectorAll('.cells');
var msgElem = document.getElementById('msg');
var liAmmo = document.getElementById('ammo');
var hit = null;

//Variables//
let board = [
    [0, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, 32, 33, 34],
    [35, 36, 37, 38, 39, 40, 41],
    [42, 43, 44, 45, 46, 47, 48]
];
let guess, square;
let hitCount = 0;
let ammo = 20;
let sunkenShips = 0;
let prevGuesses = [];

/*------------Ship Object--------------*/

var ships = {
    locations: {
        shipOne: [],
        shipTwo: [],
    },
    hits: {
        hitsOne: [],
        hitsTwo: []
    }
}
/*------------End Ship Object--------------*/




function getRow() {
    var randomNum1 = Math.floor(Math.random() * (5));
    var randomNum2 = Math.floor(Math.random() * (12 - 7) + 7);
    var randomNum3 = Math.floor(Math.random() * (19 - 14) + 14);
    var randomNum4 = Math.floor(Math.random() * (40 - 35) + 35);
    //Get Horizontal Starting Value
    var horizontalStarting = [randomNum1, randomNum2, randomNum3, randomNum4];
    var horizontalStart = horizontalStarting[Math.floor(Math.random() * horizontalStarting.length)]
    return horizontalStart;
}

//Get Vertical Starting Index Value
function getColumn() {
    var idx = Math.floor(Math.random() * (5));
    var vertIdx = board[idx][Math.floor(Math.random() * (7))];
    return vertIdx;
}

//Generate Ships

function shipYard() {
    for (var i = 0; i < 2; i++) {
        var randomNum1 = getRow()
        var randomNum2 = getColumn();
        if (randomNum1 === randomNum2 || randomNum1 === randomNum2 + 7 || randomNum1 === randomNum2 + 14 || randomNum1 + 1 === randomNum2 || randomNum1 + 1 === randomNum2 + 7 || randomNum1 + 1 === randomNum2 + 14 || randomNum1 + 2 === randomNum2 || randomNum1 + 2 === randomNum2 + 7 || randomNum1 + 2 === randomNum2 + 14) {
           
            randomNum2 = getColumn();
            randomNum1 = getRow();
        }
    }
    ships.locations.shipOne = [randomNum1, randomNum1 + 1, randomNum1 + 2];
    ships.locations.shipTwo = [randomNum2, randomNum2 + 7, randomNum2 + 14];
    console.log('random1: ', ships.locations.shipOne);
    console.log('random2: ', ships.locations.shipTwo);
}



function init() {
    for (i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', handleClick);
    };
    shipYard();
    msgElem.innerText = "READY PLAYER ONE";
    setTimeout(function() {
        msgElem.innerText = ''    }, 2000)
    liAmmo.innerText = `AMMO: ${ammo}`;
}

//Call Init
init();
//Functions

function checkWinner() {
    if (hitCount === 6) {
        msgElem.innerHTML = "CONGRATULATIONS PLAYER ONE!";
    } else if (hitCount !== 6) {
        return;
    } else if (ammo === 0) {
        msgElem.innerText = "GAME-OVER!"
    }
    
}

function testHit() {
    if (prevGuesses.includes(guess)) {
        return;
    }
    if (ships.locations.shipOne.includes(guess)) {
        hit = true;
        prevGuesses.push(guess);
        hitCount += 1;
        ships.hits.hitsOne.push(guess);
        ships.hits.hitsOne.sort(function(a, b) {
            return a - b;
        })
        if (ships.hits.hitsOne.length === 3) {
            msgElem.innerText = "SHIP SUNK";
            setTimeout(function() {
                msgElem.innerText = " ";
            }, 3000);
        } document.getElementById(guess).innerText = "HIT!"
    } else if (ships.locations.shipTwo.includes(guess)) {
        hit = true;
        prevGuesses.push(guess);
        hitCount += 1;
        ships.hits.hitsTwo.push(guess);
        ships.hits.hitsTwo.sort(function(a, b){
            return a - b;
        })
        if (ships.hits.hitsTwo.length === 3) {
            msgElem.innerText = "SHIP SUNK";
            setTimeout(function() {
                msgElem.innerText = " ";
            }, 3000);
        }
        document.getElementById(guess).innerText = "HIT!"
    } else {
        hit = false;
        document.getElementById(guess).innerText = "MISS!"
    }

}



function shipSunk() {
   
    
    if (ships.hits.hitsOne === ships.locations.shipOne) {
        sunkenShips++;
       // alert('Ship Sunk!');
    } else if (ships.hits.hitsTwo.length === 3) {
        sunkenShips++;
        //alert('Ship Sunk!');
    }
}

function giveMessage() {
    var msgElem = document.getElementById('msg');
    msgElem.innerText = msg;
}

function hits() {
    if (hit === true) {
        square.setAttribute("class", "hit");
    } else if (hit === false) {
        square.setAttribute("class", "miss");
    };
}

function handleClick(evt) {
    guess = parseInt(evt.target.id);
    square = document.getElementById(evt.target.id);
    ammo -= 1;
    liAmmo.innerText = `AMMO: ${ammo}`;

    testHit();
    hits();
    shipSunk();
    checkWinner();

}



