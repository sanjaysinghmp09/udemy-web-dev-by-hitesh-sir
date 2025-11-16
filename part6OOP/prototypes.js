let computer = { cpu : 18 };
let asus = {
    processor : 'i3' ,
    __proto__ : computer ,

};
let jojoHardware = {}

// console.log(`computer` , asus.__proto__ )

let genericCar = {tyres : 4} 

let tesla = {
    driver : "AutoDriver",
    sensorsCount : 200
}

Object.setPrototypeOf(tesla , genericCar)
console.log(`Tesla` , Object.getPrototypeOf(tesla));



