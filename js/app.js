var cells = document.querySelectorAll('.cells');
var msgElem = document.getElementById('msg');
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
let sunkenShips = 0;
function getRow(){
    var randomNum1 = Math.floor(Math.random() * (5));
    var randomNum2 = Math.floor(Math.random() * (12 - 7) + 7); 
    var randomNum3 = Math.floor(Math.random() * (19-14) + 14); 
    var randomNum4 = Math.floor(Math.random() * (40 - 35) + 35); 
    //Get Horizontal Starting Value
    var horizontalStarting = [randomNum1, randomNum2, randomNum3, randomNum4];
    var horizontalStart = horizontalStarting[Math.floor(Math.random() * horizontalStarting.length)]
    return horizontalStart;
}

//Get Vertical Starting Index Value
function getColumn() {
var idx = Math.floor(Math.random() * (5));
var vertIdx = board[idx][Math.floor(Math.random()*(7))];
return vertIdx;
}




/*------------Ship Objects--------------*/

function shipYard() {
    for(var i = 0; i < 4; i++){
        var randomNum1 = getRow()
        var randomNum2 = getColumn();


        if(randomNum2 === randomNum1 || randomNum2 === randomNum1 + 1 || randomNum2 === randomNum1  + 2){
            randomNum2 = getRow()
        } else if(randomNum2 + 1 === randomNum1 || randomNum2 + 2 === randomNum1) {
          randomNum2 = getRow;
        }
    }
    ships.locations.shipOne = [randomNum1, randomNum1 + 1, randomNum1 + 2];
    ships.locations.shipTwo = [randomNum2, randomNum2 + 7, randomNum2 + 14];
    console.log('random1: ', ships.locations.shipOne);
    console.log('random2: ', ships.locations.shipTwo);
  }
  
  
  
  
  
  /*------------Ship Object--------------*/
  
  var ships = {
      locations: {
          shipOne: [],
          shipTwo: [],
      },
      hitsOne: [],
      hitsTwo: []
  }
/*------------End Ship Object--------------*/

function init() {
    for (i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', handleClick);
    };
    board = new Array(49).fill(null);
}





//Call Init
init();
//Functions

function checkWinner() {
    if (hitCount === 3) {
        alert('winner');
    } else if (hitCount !== 3) {
        return;
    }
}

function testHit() {
    for (i = 0; i < ships.locations.length; i++) {
        if (ships.locations.includes(guess)) {
            hit = true;
            ships.hits[guess] = "hit";
            console.log(ships.hits, ships.hits.length);
        } else {
            hit = false;
        }
    } if (hit === true) {
        hitCount++;
    }
    
    console.log(ships.locations);
}

function shipSunk() {
    if (ships.hits.length === 4) {
        sunkenShips ++;
        alert('Ship Sunk!');
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
    testHit();
    hits();
    shipSunk();
    checkWinner();

}



