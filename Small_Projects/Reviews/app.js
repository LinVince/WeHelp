const reviews = [
  
  {
    id:1,
    name:"義星牧師",
    job:"",
    img:"https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png",
    text:"弘翔～準備考試辛苦了～你真的很棒，一邊禱告交託並拜託 神，一邊盡自己的責任分擔，或許因為學校的模擬測驗或者讀書狀況，也會擔心自己的期盼是否會達不到呢？但是！越是倒數時刻越是把時間花在必要的思考上，不要把時間給擔心和自我否定的部分，而是把時間給相信 神和相信與 神一起努力的你是很棒的！！持續好好加油，我們也會幫你禱告～",
  },
  {id:2,
    name:"旻諺哥",
    job:"",
    img:"https://i.pinimg.com/736x/67/73/fa/6773faf063482c02a0cb8cdae4ef2074.jpg",
    text:"弘翔一直都很努力地在跟學業奮鬥著，也都有努力聆聽話語，還參與了許多榮耀 神的活動~相信 神 聖靈 耶穌 和老師一定都因為你而感到很有力量吧~最後的末端，相信你會像大衛一樣，憑著信心，倚靠 神戰勝恐懼，也會像老師一樣，總是努力地做得更好，只要總是與主一起，就是永遠的勝利，如同老師的sign所說的，神、聖靈、聖子都會按照你的狀況和特質，引導你到最棒的道路的，不要擔心唷~祝你平安健康、考試順利！",   
  },
  {id:3,
    name:"Vince",
    job:"",
    img:"https://cdn-icons-png.flaticon.com/512/145/145867.png",
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
