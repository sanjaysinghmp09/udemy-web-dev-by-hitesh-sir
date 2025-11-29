// example 1

document.getElementById("changeTextButton").addEventListener('click' , () => {
  let paragraph = document.getElementById('myParagraph')
  paragraph.textContent = "The paragraph is changed"
})

// example -2 

document

    .getElementById("highlightFirstCity")
    .addEventListener("click" , function () {
let citiesList = document.getElementById("citiesList");
citiesList.firstElementChild.classList.add("highlight")


})

// example -3 

document.getElementById("changeOrder").addEventListener("click" , function () {
  let coffeeType = document.getElementById("coffeeType")
  coffeeType.textContent = "Espresso"
})

// example -4 
document.getElementById("addNewItem").addEventListener("click" , function () {
  let newItem = document.createElement("li")
  newItem.textContent = "Eggs"

  let newItem2  = document.createElement("li")
  newItem2.textContent = "Paneer" 

  
  document.getElementById("shoppingList").appendChild(newItem)

  document.getElementById("shoppingList").appendChild(newItem2)
})

// example - 5 

document.getElementById("removeLastTask").addEventListener("click" , function () {
  let taskList = document.getElementById("taskList")
  taskList.lastElementChild.remove()
})

document.getElementById("undoRemoveLastTask").addEventListener("click" , function () {
  let newItem = document.createElement("li")
  newItem.textContent = "Task-1"

  
  document.getElementById("taskList").appendChild(newItem)

})

// EXAMPLE 6

document.getElementById("clickMeButton").addEventListener("click" , function () {
  alert("Hey Sanjay Fuck You 98 times !")
})

// example - 7

document
  .getElementById("teaList")
  .addEventListener("click" , function(event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You are selected :" + event.target.textContent)
  }
})

// example - 8 form handling

document
  .getElementById("feedbackForm")
  .addEventListener("submit" , function (e) {
    e.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback)

    document.getElementById("feedbackDisplay").textContent = `Your feedback is : ${feedback}`

})