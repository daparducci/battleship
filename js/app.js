var cells = document.querySelectorAll('.cells');
var msgElem = document.getElementById('msg');
var hit = true;

function init () {
    for(i=0; i<cells.length; i++) {
        cells[i].addEventListener('click', handleClick);
    };
}
init();
//View

//Model

//Controler

function handleClick (evt) {
    var location = parseInt(evt.target.id);
    var cell = document.getElementById(evt.target.id);
    console.log(cell);
    if (hit === true) {
        cell.setAttribute("class", "hit");
    } else if (hit === false) {
        cell.setAttribute("class", "miss");
    }
}