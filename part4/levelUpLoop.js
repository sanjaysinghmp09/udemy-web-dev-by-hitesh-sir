let teas = ['green tea' , "black tea" , "chai" , "oolong tea"];
selectedTeas = [];
for (let i = 0; i < teas.length; i++) {
     if (teas[i] === "chai") {
        break
    }
    selectedTeas.push(teas[i] 
    )}
// console.log(selectedTeas)

let cities = ["London" , "New York" , "Paris" , "Berlin"];
visitedCities = [];

for (let i = 0; i < cities.length; i++) {
   if (cities[i] === "Paris") {
    continue
   }

   visitedCities.push(cities[i])
    
}
console.log(visitedCities)