const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");
const startButton = document.getElementById("start");

const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg"
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg"

let openDoor1;
let openDoor2;
let openDoor3;
let numClosedDoors = 3;

const isBot = door => {
   if (door.src === botDoorPath){
       return true;
   } else {
       return false;
   }
}

function isClicked(door) {
    if (door.src === closedDoorPath) {
            return false;
        } else {
            return true;
        }
}

const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)){
            gameOver();
    }
}

doorImage1.onclick = () => {
    if(!isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
        }
    }
    doorImage2.onclick = () => {
    if(!isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
}
doorImage3.onclick = () => {
    if(!isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
}

const gameOver = status => {
    if (status === 'win') {
        startButton.innerHTML = 'You won! Start Again?'
    } else {
        startButton.innerHTML = 'You lost! Start Again?'
    }
}


const randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoors);
    switch (choreDoor) {
        case 0:
            openDoor1 = botDoorPath;
            openDoor2 = beachDoorPath;
            openDoor3 = spaceDoorPath;
            break;
        case 1:
            openDoor1 = beachDoorPath;
            openDoor2 = botDoorPath;
            openDoor3 = spaceDoorPath;
            break;
        case 2:
            openDoor1 = beachDoorPath;
            openDoor2 = spaceDoorPath;
            openDoor3 = botDoorPath;
            break;
        }
}

randomChoreDoorGenerator();