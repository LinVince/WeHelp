var count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//for each element in the array
btns.forEach(function(btn){
  console.log(btn);
  btn.addEventListener('click',function(event){
    console.log(event.currentTarget);
    //check the event of the clicked button
    console.log(event.currentTarget.classList);
    //list the class of the event clicked
    const styles = event.currentTarget.classList;
    //list the class itmes contained in the event
    if (styles.contains('decrease')){
      count--;          
    } else if(styles.contains('increase')){
      count++;      
    } else {
      count = 0;
    };
    if (count > 0){
      value.style.color = "green"
    }
     else if (count === 0){
      value.style.color = "black"
    } else {
      value.style.color = "red"
    }
    value.textContent = count;
  })
});
