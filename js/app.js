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
let guess, board, square;
let hitCount = 0;
let sunkenShips = 0;

var randomNum1 = Math.floor(Math.random() * (5)); // find random number betweenn 0 and 4 
var randomNum2 = Math.floor(Math.random() * (12 - 7) + 7) // find random number betweenn 7 and 11
var randomNum3 = Math.floor(Math.random() * (19-14) + 14) // find random number betweenn 0 and 5  'Math.random() * (max - min) + min;'
var randomNum4 = Math.floor(Math.random() * (40 - 35) + 35) // find random number betweenn 0 and 5

//Looping to get column indexes 
//1. Loop through outer array
//2. for each index loop into inner array and return first value



/*------------Ship Objects--------------*/

var ships = {
    locations: {
        shipOne: [randomNum1, randomNum1 +1, randomNum1 +2],
        shipTwo: [randomNum2, randomNum2 +1, randomNum2 +2],
        shipThree: [randomNum3, randomNum3 +1, randomNum3 +2],
        shipFour: [randomNum4, randomNum4 +1, randomNum4 +2],
    },
    hits: []
}

// function boatGrid () {
//     var locs;
//     for (var i = 0; i < 3; i ++) {
//         do {
//             locs = shipBuilder();
//         } while ()
//     }
// }

// function collision() {
//     for (var i=0; i < 3; i++) {
//         var ship = ships.locations[i];
//         for (var k = 0; i < locations.length; k++) {
//             if(ships.locations.indexOf(locations[k]) >=0) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// function rows() {
//     var row;
//     row = Math.floor(Math.random() * 7);

// }

// function shipBuilder () {
//     var orientation = Math.floor(Math.random() * 2);
//     var row;
//     var col;
//     row = Math.floor(Math.random() * 7);
//     col = Math.floor(Math.random() * (5));
//     var newShipLocations = [];
//     for (var i = 0; i < 3; i++) {
       
//             newShipLocations.push(row + '' + (col + i));
            
        
//     }
//     return newShipLocations;
// }


function placeShip() {
    var horizontal = Math.floor(Math.random() * 2) === 0

    if (horizontal) {
        var column = Math.floor(Math.random() * (4));
        var row = Math.floor(Math.random() * 7);

        for(i=0; i<3; i++) {
            if()
        }
    }
}


/*------------Ship Objects--------------*/


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



