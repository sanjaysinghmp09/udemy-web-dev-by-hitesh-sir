let teas = ['green tea' , "black tea" , "chai" , "oolong tea"];
selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
    selectedTeas.push(teas[i])

    if (selectedTeas[i] === "chai") {
        break
    }

}
console.log(selectedTeas)
