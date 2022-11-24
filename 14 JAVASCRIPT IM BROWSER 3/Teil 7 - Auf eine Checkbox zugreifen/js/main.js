"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("add-student")
  const nameInput = document.getElementById("nameInput")
  const studentList = document.getElementById("students-list")
  const agbInput = document.getElementById("agbInput") ///Dieses Element hat eine zusätzliche Eigenschaft (boolean), was ist TRUE, wenn dieses TextBox gesetzt ist, und FALSE wenn dieses textBox nicht gesetzt ist

  addStudentButton.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("AGB Input: ", agbInput.checked)

    if (agbInput.checked === false) {
      alert("Bitte, lese mal AGB!")
      return
    }

    const text = nameInput.value

    if (text === "")
      return

    const strongElement = document.createElement("strong")
    strongElement.appendChild(document.createTextNode(text)) ///wir packen textInput in einem Element

    const liElement = document.createElement("li")
    liElement.appendChild(strongElement) ///wir packen "strongElement" in "liElement"
    liElement.classList.add("list-group-item")

    studentList.appendChild(liElement)

    nameInput.value = ""

  })
})