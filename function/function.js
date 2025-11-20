function greet (name) {
    console.log(`Hey ! ${name}`)
}
// greet("Sanjay")

function Car(brand, year) {
  this.brand = brand;
  this.year = year;
  return year;
}

const myCar = new Car("BMW", 2001);

console.log(myCar); // Car { brand: 'BMW', year: 2001 }

function myLife (fun, work) {
 console.log("Work work work ")
}