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


