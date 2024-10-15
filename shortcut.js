// 'almas', 5, ture, {}, []
// '', 0, false, null, undefinde
let myVar = 5;
if(myVar===5){
  myVar=myVar*100
}else{
  console,log("myVar is not 5")
}
console.log(myVar)

//ternary
const money = 800
const extraMoney = 100
let food = money>100 ? "biriyani" : "cha ruti";
console.log(food)
let drink = (money>100 && extraMoney>50) ? "biriyani + coke" : "cha ruti + pani"
console.log(drink)


// num to str
const num1 = 54;
console.log(typeof(num1))
const numStr = num1 + ''
console.log(typeof(numStr))

// str to number
const input = "560"
const inputNum = +input
console.log(typeof(inputNum))

//
const isActive = true;
const showUser = () => console.log("display user");
const hideUser = () => console.log("hide user");
isActive?showUser():hideUser()