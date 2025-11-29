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