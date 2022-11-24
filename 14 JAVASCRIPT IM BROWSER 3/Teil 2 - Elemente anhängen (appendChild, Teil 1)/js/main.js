"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("add-student")

  addStudentButton.addEventListener("click", () => {
    const liElement = document.createElement("li")      ///ich erstelle mein ListElement

    liElement.innerText = "Hallo Welt!"                 ///ich setze da den Text
    liElement.classList.add("list-group-item")          ///ich packe da noch eine zusätzliche Klasse hinzu

    const ulElement = document.querySelector("ul.list-group")    //dann hole ich mir das Element, welches es in meinem Dokument gibt 
    ulElement.appendChild(liElement)                             //und dann sage ich: "Okey, in dieses Element füge doch bitte dieses ListElement ans Ende hinzu.

  })
})

