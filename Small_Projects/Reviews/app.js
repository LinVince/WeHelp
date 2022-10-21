const reviews = [
  
  {
    id:1,
    name:"Vince",
    job:"Manager",
    img:"https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/03-reviews/final/person-1.jpeg",
    text:"The best. No doubt",
  },
  {id:2,
    name:"Tom",
    job:"Manager",
    img:"https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/03-reviews/final/person-1.jpeg",
    text:"The best. No doubt",   
  },
  {id:3,
    name:"Jack",
    job:"Manager",
    img:"https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/03-reviews/final/person-1.jpeg",
    text:"The best. No doubt",
  }
]

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const preBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item when refresh the page
window.addEventListener('DOMContentLoaded',function(){
  showPerson(currentItem);
});
  
  //show person based on item  
function showPerson(person){
    const item = reviews[person];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;    
  };

//show next person
nextBtn.addEventListener('click',function(){
  if (currentItem < reviews.length - 1){
  currentItem ++;
  showPerson(currentItem);
  }
});

preBtn.addEventListener('click',function(){
   if (currentItem > 0){
  currentItem -= 1;
  showPerson(currentItem);}
});
  
function getRandomNumber(){
  return Math.floor(Math.random() * reviews.length)}; 
  
randomBtn.addEventListener('click', function(){  
  showPerson(getRandomNumber());    
});
