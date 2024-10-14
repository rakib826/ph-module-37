const products = [
  {name: "laptop", price: 455000, brand: "Lenevo", color:"Midnight Blue"},
  {name: "iphone", price: 678000, brand: "Apple", color:"Silver White"},
  {name: "laptop", price: 785000, brand: "Asus", color:"Aurora Green"},
  {name: "Macbook", price: 565000, brand: "Apple", color:"Carbon Grey"},
  {name: "Buds", price: 405000, brand: "Lenevo", color:"Charcoal Black"}
];
const brands = products.map(product => product.brand)
console.log(brands)
const prices = products.map(product=>product.price)
console.log(prices)

products.forEach(product => console.log(product.color))

//filter 
const cheap = products.filter(product=> product.price<=700000);
console.log(cheap)
console.log("------------------------------------------------------------------------------")
const specificName = products.filter(product => product.brand.includes('e'));
console.log(specificName)
console.log("------------------------------------------------------------------------------")
const special = products.find(p=>p.name.includes("a"))
console.log(special)