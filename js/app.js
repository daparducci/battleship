/*----------Cached Elements-----------*/

var cells = document.querySelectorAll('.cells');
var msgElem = document.getElementById('msg');
var liAmmo = document.getElementById('ammo');
var liHits = document.getElementById('hits');
var liShipsSunk = document.getElementById('ships-sunk');
document.getElementById("my-button").addEventListener('click', restart);


//---------------APP STATE VARIABLES----------------//
let board = [
    [0, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, 32, 33, 34],
    [35, 36, 37, 38, 39, 40, 41],
    [42, 43, 44, 45, 46, 47, 48]
];
let guess, square, hitCount, ammo, sunkenShips, prevGuesses, hit;

var ships = {
    locations: {
        },
    hits: {
        }
}

init();

/*------------------FUNTIONS-----------------*/


/*--------------------------Get Row-------------------------*/
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

/*-----------------------Get Column--------------------------*/
function getColumn() {
    var idx = Math.floor(Math.random() * (5));
    var vertIdx = board[idx][Math.floor(Math.random() * (7))];
    return vertIdx;
}

/*------------------Generate Ships----------------------*/

function shipYard() {
    for (var i = 0; i < 2; i++) {
        var randomNum1 = getRow()
        var randomNum2 = getColumn();
            while (randomNum1 === randomNum2 || randomNum1 === randomNum2 + 7 || randomNum1 === randomNum2 + 14 || randomNum1 + 1 === randomNum2 || randomNum1 + 1 === randomNum2 + 7 || randomNum1 + 1 === randomNum2 + 14 || randomNum1 + 2 === randomNum2 || randomNum1 + 2 === randomNum2 + 7 || randomNum1 + 2 === randomNum2 + 14) {
               randomNum2 = getColumn();
            } 
        }
    ships.locations.shipOne = [randomNum1, randomNum1 + 1, randomNum1 + 2];
    ships.locations.shipTwo = [randomNum2, randomNum2 + 7, randomNum2 + 14];
    console.log('random1: ', ships.locations.shipOne);
    console.log('random2: ', ships.locations.shipTwo);
}
/*---------------------------------------------------------------*/
/*----------------Check Winner Function-------------*/
function checkWinner() {
    if (ammo === 0) {
        msgElem.innerText = "GAME OVER";
        setTimeout(function(){
            init();
        }, 2000);
        
    }
    if (hitCount === 6) {
        msgElem.innerHTML = "CONGRATULATIONS PLAYER ONE!";
    } else if (hitCount !== 6) {
        return;
    } else if (ammo === 0) {
        msgElem.innerText = "GAME-OVER!"
    }
}
/*---------------------------------------------------*/
/*------------------Test Hit Function----------------*/
function testHit() {
    if (prevGuesses.includes(guess)) {
        return;
    }
    if (ships.locations.shipOne.includes(guess)) {
        hit = true;
        prevGuesses.push(guess);
        hitCount ++;
        ships.hits.hitsOne.push(guess);
        ships.hits.hitsOne.sort(function(a, b) {
            return a - b;
        })
        if (ships.hits.hitsOne.length === 3) {
            sunkenShips ++;
            msgElem.innerText = "SHIP SUNK";
            setTimeout(function() {
                msgElem.innerText = " ";
            }, 3000);
        } 
    } else if (ships.locations.shipTwo.includes(guess)) {
        hit = true;
        prevGuesses.push(guess);
        hitCount ++;
        ships.hits.hitsTwo.push(guess);
        ships.hits.hitsTwo.sort(function(a, b){
            return a - b;
        })
        if (ships.hits.hitsTwo.length === 3) {
            sunkenShips ++;
            msgElem.innerText = "SHIP SUNK";
            setTimeout(function() {
                msgElem.innerText = " ";
            }, 3000);
        }
        
    } else {
        hit = false;
        document.getElementById(guess).innerText = "MISS!"
    }
    
}
/*-----------------------------------------------------------*/
/*------------------Update Stats Function--------------------------*/

function giveMessage() {
    var msgElem = document.getElementById('msg');
    liHits.innerText = `HITS: ${hitCount}`
    liShipsSunk.innerText = `SHIPS SUNK: ${sunkenShips}`
}
/*-----------------------------------------------------------*/

/*-----------------------Display Hit/Miss--------------------------*/
function hitsDisplay() {
    if (hit === true) {
        square.setAttribute("class", "hit");
    } else if (hit === false) {
        square.setAttribute("class", "miss");
    };
}
/*------------------------Handle Click---------------------------*/
function handleClick(evt) {
    guess = parseInt(evt.target.id);
    square = document.getElementById(evt.target.id);
    ammo -= 1;
    liAmmo.innerText = `AMMO: ${ammo}`;
    testHit();
    giveMessage();
    hitsDisplay();
    checkWinner();
}

/*-------------------------Init Function--------------------------*/
function init() {
    hit = null;
    hitCount = 0;
     ammo = 20;
    sunkenShips = 0;
    prevGuesses = [];
    ships.locations.shipOne = [];
    ships.locations.shipTwo = [];
    ships.hits.hitsOne = [];
    ships.hits.hitsTwo = [];
    for (i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', handleClick);
        cells[i].setAttribute("class", "cells");
        cells[i].innerHTML = '';
    };
    shipYard();
    msgElem.innerText = "READY PLAYER ONE";
    setTimeout(function() {
        msgElem.innerText = ''    }, 2000);
    liShipsSunk.innerText = `SHIPS SUNK: 0`;
    liAmmo.innerText = `AMMO: ${ammo}`;
    liHits.innerText = `HITS: 0`;
}

function restart() {
    init();
}

