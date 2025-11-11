// challenge -1 
let teas = ['green tea', "black tea", "chai", "oolong tea"];
selectedTeas = [];
for (let i = 0; i < teas.length; i++) {
   if (teas[i] === "chai") {
      break
   }
   selectedTeas.push(teas[i]
   )
}
// console.log(selectedTeas)

// challenge -2 

let cities = ["London", "New York", "Paris", "Berlin"];
visitedCities = [];

for (let i = 0; i < cities.length; i++) {
   if (cities[i] === "Paris") {
      continue
   }

   visitedCities.push(cities[i])

}
// console.log(visitedCities)

// challenge -3 

let numbers = [1, 2, 3, 4, 5]

let smallNumbers = [];

for (const num of numbers) {
   if (num === 4) {
      break
   }

   smallNumbers.push(num)
}
console.log(smallNumbers)