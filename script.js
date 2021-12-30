const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");

const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";

const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg"

const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg"


doorImage1.onclick = () =>{
  doorImage1.src = openDoor1;
}
doorImage2.onclick = () =>{
    doorImage2.src = openDoor2;
  }
doorImage3.onclick = () =>{
  doorImage3.src = openDoor3;
}

let openDoor1;
let openDoor2;
let openDoor3;

const randomChoreDoorGenerator = () => {
    const numClosedDoors = 3;
    const choreDoor = Math.floor(Math.random()*numClosedDoors);
    console.log(choreDoor)
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
            break;}
    console.table([openDoor1,openDoor2,openDoor3]);
}