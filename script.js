const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");

const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";

doorImage1.onclick = () =>{
  doorImage1.src = botDoorPath;
}
doorImage2.onclick = () =>{
    doorImage2.src = botDoorPath;
  }
doorImage3.onclick = () =>{
  doorImage3.src = botDoorPath;
}