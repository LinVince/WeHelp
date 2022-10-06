
      //const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const  colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('onclick',function(){
  let hexcolor = "#";
  for (let i = 0; i < 6; i++){
    hexcolor += colors[getRandomNumber()];
  }
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = hexcolor; color.textContent = hexcolor;
});

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}
