"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("add-student")

  addStudentButton.addEventListener("click", () => {
    const liElement = document.createElement("li")
    liElement.classList.add("list-group-item")

    const strongElement = document.createElement("strong")
    strongElement.appendChild(document.createTextNode("Hello Welt!"))

    liElement.appendChild(strongElement)

    const ulElement = document.querySelector("ul.list-group")
    ulElement.prepend(liElement) ///wird am Anfang der liElemente platziert (in ul Elemente - am Anfang der liElemente)

    //ulElement.after(liElement) //nach dem ulElement wird mein liElement platziert (außer ul Elemente - am Ende)
    //ulElement.after(liElement) //vor dem ulElement wird mein liElement platziert (außer ul Elemente - am Anfang)
  })
})


/**
ulElement.before(liElement) -> außer den ulElementen, am ANFANG
ulElement.after(liElement) -> außer den ulElementen, am ENDE

ul.Element.prepend(liElement) -> in den ulElementen, am Anfang
ul.Element.append(liElement) -> in den ulElementen, am Ende
 */

