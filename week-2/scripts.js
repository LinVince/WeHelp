#### 1 ####

function calculate(min, max, step) {
  let numList = [];
  let i = 1 ;
  while (1 < 2){
  	if (min + step * i > max){
    	break;	
    }
	numList.push(min + step * i);
    i += 1;
  }
  return (min  + numList.reduce((a,b)=>a+b));   
  }

calculate(1, 3, 1); // 你的程式要能夠計算 1+2+3,最後印出 6
calculate(4, 8, 2); // 你的程式要能夠計算 4+6+8,最後印出 18
calculate(-1, 2, 2); // 你的程式要能夠計算 -1+1,最後印出 0


#### 2 ####
function avg(data){
  let count = 0;
  let salary = 0;
  let arrayLength = data['employees'].length;
  for (var i = 0; i < arrayLength; i++){
      if (data['employees'][i]['manager'] === false){
          salary += data['employees'][i]['salary'];
          count += 1
      }
  }
  return (salary/count);
}

avg({
"employees":[
{
"name":"John",
"salary":30000,
"manager":false
},
{
"name":"Bob",
"salary":60000,
"manager":true
},
{
"name":"Jenny",
"salary":50000,
"manager":false
},
{
"name":"Tony",
"salary":40000,
"manager":false
}
]
}); // 呼叫 avg 函式


#### 3 ####
function func(a){
  function _func(b,c){
      return a + (b * c);
  }
  return _func;
}

func(2)(3, 4); // 你補完的函式能印出 2+(3*4) 的結果 14
func(5)(1, -5); // 你補完的函式能印出 5+(1*-5) 的結果 0
func(-3)(2, 9); // 你補完的函式能印出 -3+(2*9) 的結果 15
// 一般形式為 func(a)(b, c) 要印出 a+(b*c) 的結果



#### 4 ####
