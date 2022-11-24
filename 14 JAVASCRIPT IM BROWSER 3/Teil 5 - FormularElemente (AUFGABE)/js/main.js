"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("add-student")
  const nameInput = document.getElementById("nameInput")

  addStudentButton.addEventListener("click", (event) => {
    event.preventDefault() //verhindert den Formular vom Schicken (weil Formular normalweise abgeschickt wird)

    const liElement = document.createElement("li")
    liElement.classList.add("list-group-item")

    const strongElement = document.createElement("strong")
    strongElement.appendChild(document.createTextNode(nameInput.value))


    liElement.appendChild(strongElement)

    const ulElement = document.querySelector("ul.list-group")
    ulElement.append(liElement)

    nameInput.value = ""
  })

  /* nameInput.addEventListener("change", (event) => { //wenn unsere Eingabe verändert wird, also wenn wir "Teilnehmer hinzufügen"-Button drücken
     ///console.log("change: ", nameInput.value)
   })
 
   nameInput.addEventListener("keyup", (event) => { //wird gerufen, wenn ich eine Taste loslasse
     console.log("keyup: ", nameInput.value)
   })*/
})

