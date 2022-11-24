"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const helpElements = document.querySelectorAll("[data-help]")

  for (const helpElement of helpElements) {
    helpElement.addEventListener("click", (event) => {
      event.preventDefault()

      const helpText = helpElement.attributes["data-help"].value
      alert(helpText)
    })
  }


  const cardElements = document.getElementsByClassName("card")

  for (const cardElement of cardElements) {
    /*
    if (cardElement.style["background-color"] === "") {
      cardElement.style["background-color"] = "darkblue"
    }
    console.log(cardElement.style["background-color"])
    */



    //das geht NUR BEI DER "STYLE" EIGENSCHAFT
    if (cardElement.style.backgroundColor === "") {
      cardElement.style.backgroundColor = "blue"
    }


    ///Diese Funktion verursacht, dass wenn wir auf ein Element clicken, VERSCHWINDET DIESES ELEMENT, bis wir die Seite wieder neuladen
    cardElement.addEventListener("click", () => {
      cardElement.style.display = "none"
    })
  }
})
