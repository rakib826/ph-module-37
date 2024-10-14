const numbers = [45,67]
// const x = numbers[0]
// const y = numbers[1]
const [x,y] = [...numbers]
console.log(x,y)

const getValues = (num1,num2)=>{
  const nums=[num1,num2];
  return nums

}

// console.log(getValues(23,34))
const [first,second] = getValues(23,45);
console.log(first,second)

//
const student = {
  name: "Salib Khan",
  age: 34,
  movies: ["King Khan","Dhakar Mastan"]
}

const [firstMovie,secondMovie] = student.movies
console.log(firstMovie,secondMovie)

// object distructuring
const {name, age} = {name: "alu", age: 14};
// const {name, age} = {id:12, name: "alu", age: 14, salary: 3400};

const employee = {
  ide: "VScode",
  designation: "developer",
  machine: "Windows",
  Language: ["html", "css", "js"],
  specification: {
    height: 78,
    weight: 65,
    address: "Dhaka",
    drink: "wine",
    watch: {
      brand: "Casio",
      model: "G-SHOCK",
      color: "Black",
      material: "Resin"
    }
  }
}

const{machine,ide} = employee;
console.log(machine,ide)
const {weight,address} = employee.specification
console.log(weight,address)
const [firstLn, secondLn] = employee.Language
console.log(firstLn,secondLn)
const {brand, model} = employee.specification.watch
console.log(brand,model)
