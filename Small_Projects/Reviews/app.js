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
    img:"https://avatars.githubusercontent.com/u/13519957?v=4",
    text:"弘翔一直都很努力地在跟學業奮鬥著，也都有努力聆聽話語，還參與了許多榮耀 神的活動~相信 神 聖靈 耶穌 和老師一定都因為你而感到很有力量吧~最後的末端，相信你會像大衛一樣，憑著信心，倚靠 神戰勝恐懼，也會像老師一樣，總是努力地做得更好，只要總是與主一起，就是永遠的勝利，如同老師的sign所說的，神、聖靈、聖子都會按照你的狀況和特質，引導你到最棒的道路的，不要擔心唷~祝你平安健康、考試順利！",   
  },
  {id:3,
    name:"Vince",
    job:"",
    img:"https://img.freepik.com/premium-vector/cute-boy-with-phone-cartoon-icon-illustration_138676-2422.jpg",
    text:"弘翔，我的祝福都寫在天國黃金城的柱子上了，透過禱告來看見吧！",
  },
  {id:4,
    name:"奇駿哥",
    job:"",
    img:"https://img.freepik.com/free-vector/cute-boy-playing-soccer-cartoon-vector-icon-illustration-people-sport-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4055.jpg",
    text:"弘翔，你真的準備得很認真，一定要告訴自己：「我準備好了！」每填一個答案就告訴自己：「我一定會考很好」如果擔心的話就想著：會考的都是我有準備的，我沒準備的都不會考，如果真的考就送他啦！遇到不會寫的題目時，記得呼喊三位耶穌跟老師，公義的神一定會給你幫助的！我之前考試有一題不會寫，聖靈就讓我想起考前念的一段課文，因為那一題的關係，我來到了很喜歡的學校和科系，相信這樣的神蹟也會發生在你身上的～～祝你一切順利呦！！！！！！！",
  }
  {id:5,
    name:"元智牧師",
    job:"",
    img:"https://img.freepik.com/premium-vector/avatar-vector-flat-face-icon-girls-women-girls-slavic-appearance-long-hair-straight-brown-user-web-sites-applications-stock-design-white-skin_599742-112.jpg?w=500",
    text:"親愛的弘翔～學測剩下一個多月了！相信有弘翔這段期間掙扎奮鬥的努力＋神的運勢加持，結果一定會很不錯的👍只要弘翔盡全力預備，剩下的一切就交託給 神！神會用祂的全能來動工，就像上次你拿到31.6級分那樣的，再次興起神蹟^^弘翔加油！！！我們會幫你禱告到底的 祝 金榜題名 考試順利",
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
