let computer = { cpu : 18 };
let asus = {
    processor : 'i3' ,
    __proto__ : computer ,

};
let jojoHardware = {}

console.log(`computer` , asus.__proto__ )

