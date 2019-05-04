# BattleShip
____________

## **THE GAME**
===============

##### Each player will start with battleship fleet of 4 ships. Ships will have set lengths of 2, 3, 3, 4. Program will randomly select ship locations. A ship will be considered sunk when all spaces containing chip have been declared a hit. All ships must be sunk in oder for winner to be declared.

##### To Win

*Player must sink all 4 ships before other player
*Once all ships have been sunk, winner will be declared

##### To Lose

*All ships have been declared sunk.


## Rendering
##### Game will take place on two separate game boards. Player one will have a 7x7 grid on the left, player two will have 7x7 grid on the right. Players will not use original grid coordinates like original battleship. Game will instead use click events on each cell.

#### **Check Ship**
This will be represented by an array of nulls. This will be updated by each players shot. If it, array will update to equal 1 for player 1 and -1 for player 2. 

{[locations: 1, 2, 3], hits: ["hit", ", ""]}

turn will be checked each move turn*=1. 