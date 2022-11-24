"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const dateElement = document.getElementById("date-countdown")

  dateElement.addEventListener("click", () => {   //wenn es auf diesen Element geclickt wird, dann soll eine Funktion ausgeführt werden
    dateElement.innerText = "24.07.2021"  //In Webseite steht 24.07.2019 -> es ändert sich aber auf 27.07.2021
    console.log("dateElement wurde gecklickt")

  })

  dateElement.addEventListener("mouseenter", () => {
    dateElement.innerText = "24.07.2020"    //wenn wir mit dem Maus darauf eingehe, ändert sich den Datum von 24.07.2019 auf 24.07.2020

  })

  dateElement.addEventListener("mouseleave", () => {
    dateElement.innerText = "24.07.2019"     ///wenn wir Maus weg davon geben...
 
  })
})
