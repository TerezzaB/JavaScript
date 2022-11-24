"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("add-student")

  addStudentButton.addEventListener("click", () => {
    const liElement = document.createElement("li")
    liElement.classList.add("list-group-item")

    const strongElement = document.createElement("strong")

    /*const textNode = document.createTextNode("Hallo Welt!")     ///oder: strongElement.innerText = "Hallo Welt!" 
    strongElement.appendChild(textNode)*/

    strongElement.appendChild(document.createTextNode("Hallo Welt!")) //genauso wie oben, aber in 1 Reihe

    liElement.appendChild(strongElement)                        //wir packen strongElement in liElement..... -> sieh HTML warum

    const ulElement = document.querySelector("ul.list-group")  //dann hole ich mir das Element, welches es in meinem Dokument gibt 
    ulElement.appendChild(liElement)                           //und dann sage ich: "Okey, in dieses Element füge doch bitte dieses ListElement ans Ende hinzu.
  })
})

