// JSON
const student = {
  name: "Salib Khan",
  age: 34,
  movies: ["King Khan","Dhakar Mastan"]
}
const studentJSON = JSON.stringify(student)
console.log(student)
console.log(studentJSON)

studentObj = JSON.parse(studentJSON)
console.log(studentObj)

//fetch
// fetch('url')
//   .then(response=>response.json())
//   .then(data=>console.log(data))


//keys , values
const keys = Object.keys(student);
const values = Object.values(student)

// for 
const numbers = [23,4,5,6,23,2,6]
numbers.forEach(num=>console.log(num))
numbers.map(num=>num*2);
//for-of on array like object
//loop on an object using for-in


//add and remove from an array
const products = [
  {name: "laptop", price: 455000, brand: "Lenevo", color:"Midnight Blue"},
  {name: "iphone", price: 678000, brand: "Apple", color:"Silver White"},
  {name: "laptop", price: 785000, brand: "Asus", color:"Aurora Green"},
  {name: "Macbook", price: 565000, brand: "Apple", color:"Carbon Grey"},
  {name: "Buds", price: 405000, brand: "Lenevo", color:"Charcoal Black"}
];

const newProduct = {name: "webcam", price: 8000, brand: "zeiss", color: "black"};

//copy products array then add new products
const newProducts = [...products, newProduct]
console.log(newProducts)

//create a new array without one specific item
//remove iphone means create a new array without the iphone
console.log("----------------------------------------------------------------------------------------")
const remaining = products.filter(product=>product.name!=="iphone")
console.log(remaining)
