"use strict"

////Diese "event" Variable hat uns mitgeteilt, 
///über die Target-Eigenschaft auf welches spezifisches Element ursprünglich geclickt wurde,
///und dieses Event hat bei diesem Elemnt angefangen und ist dann, diesen ganzen Baum hochgestiegen

//// MANCHMAL ist das allerdings so, dass wir dieses HOCHSTEIGEN gerne VERHINDERN sollen
///Und da gibt es eine Methode, die wir hier auf unserem 'Event' Objekt ausführen können,
///und zwar, müssen wir sie dann da ausführen, wo wir dieses Hochsteigen verhindern möchten


document.addEventListener("DOMContentLoaded", () => {

  const helpElements = document.querySelectorAll("[data-help]")
  for (const helpElement of helpElements) {
    helpElement.addEventListener("click", (event) => {
      event.preventDefault()
      event.stopPropagation() ///Damit sagen ich: 'Bei diesem Ereignis, möchte ich NICHT dieses Ereignis wieter in unserem Dokument-Baum aufsteigt.

      const helpText = helpElement.attributes["data-help"].value
      alert(helpText)
    })
  }


  const cardHeaderElements = document.getElementsByClassName("card-header")

  for (const cardHeaderEl of cardHeaderElements) {

    const cardBody = cardHeaderEl.nextElementSibling
    cardBody.style.display = "none"


    const cardIcon = cardHeaderEl.querySelector(".card-toggle-icon")
    cardIcon.classList.remove("fa-angle-double-down")
    cardIcon.classList.add("fa-angle-double-right")


    cardHeaderEl.addEventListener("click", () => {

      if (cardBody.style.display === "block") {

        cardIcon.classList.remove("fa-angle-double-down")
        cardIcon.classList.add("fa-angle-double-right")

        cardBody.style.display = "none"
      }
      else {
        cardIcon.classList.remove("fa-angle-double-right")
        cardIcon.classList.add("fa-angle-double-down")

        cardBody.style.display = "block"
      }

    })
  }


}) 
