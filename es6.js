const numbers = [23,4,23,4,2,5,56,8]
const student = {
  name: "Xavier",
  age: 56,
  experience:["WWI","WWII"]
}

const about = `My name is ${student.name}. I am ${student.age} years old and attended ${student.experience[1]}`
console.log(about)

//arrow function
const getFiftyFive = ()=>55;
const addSixtyFive = num => num+65;
const isEven = x => x%2==0;
console.log(isEven(23))
const addThree = (x,y,z)=> x+y+z;

const doMath = (num1,num2) =>{
  const sum = num1+num2
  return sum 
}
result = doMath(5,23)
console.log(result)

//spread operator
const newNumbers = [...numbers]
newNumbers.push(100)
console.log(numbers)
console.log(newNumbers)