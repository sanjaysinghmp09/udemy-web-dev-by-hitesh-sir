function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const myBrother = new Person ("Sanjay" , "Singh" , 22 , "Black")
document.getElementById("demo").innerHTML =
"My father is " + myFather.age + ". My mother is " + myMother.age + " . My Brother Favourite Colour is " + myBrother.eyeColor; 