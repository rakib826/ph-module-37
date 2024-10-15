const person = {
  name: "mr. x",
  profession: "Singer",
  age: 34,
  25: 88,// to access this we must use braket notation. if there key is string then dot notation is okay.
  address: "Dhaka-1200"
}

// dot notation
const prof = person.profession

// braket notation
const prof1 = person["profession"]
const num = person[25]
console.log(num)

console.log(prof1)