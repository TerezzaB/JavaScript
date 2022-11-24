"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const helpELements = document.querySelectorAll("[data-help]")

  for (const helpElement of helpELements) {
    helpElement.addEventListener("click", (event) => {
      event.preventDefault()

      const helpText = helpElement.attributes["data-help"].value;
      alert(helpText)
    })
  }

  const cardElements = document.getElementsByClassName("card")
  for (const cardElement of cardElements) {

    //.CONTAINS() fragt ab, ob ein Element eine bestimmte Klasse hat, oder nicht
    console.log(cardElement.classList.contains("card"))

    //.ADD() fügt eine Klasse hinzu
    cardElement.classList.add("bg-success")
    cardElement.classList.add("bg-success") //hier jetzt beim 2 Aufruf, hat es dann schon festgestellt, dass dieses Element diese Klasse schon hat, und sie wird dann NICHT hinzugefügt

    //.REMOVE() entfernt die Klasse, ob sie existiert
    cardElement.classList.remove("bg-success")

    //.TOGGLE() wenn das Element diese Klasse besitzt, wird sie entfernt, ansonsten wird sie hinuzugefügt
    cardElement.classList.toggle("bg-toggle")
  }
})


