const fatherName = "Hizenberg"
let season = 'Monsoon'
season = 'Autumn'
// 6 basic conditions: > < === !== <= >=
// multiple condition  && ||
const hello = () => {
  console.log("hello")
}
hello()

if(fatherName==="Hizenberg"){
  console.log("Name is correct")
}else
{
  console.log("Season is",season)
}
// array
// index - 0,1,2,3,4,5,6,7,8...
// 
const nums = [23,1,2,67,3,56,89];
len = nums.length
console.log(len)

// for loop
for(let i=0; i<len; i++){
  const number = nums[i]+10
  console.log(number)
}

const student = {
  name: "Mokles",
  age: 32,
  movies: ["mokles no 1", "mokles no 2"]
}

console.log(student.age)
console.log(student["age"])
