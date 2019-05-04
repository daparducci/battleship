var cells = document.querySelectorAll('.cells');
var msgElem = document.getElementById('msg');
var hit = null;

//Variables//

let guess, board, square;
let hitCount = 0;
let sunkenShips = 0;

/*------------Ship Objects--------------*/

var ships = {
    locations: [1, 2, 3],
    hits: []
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



