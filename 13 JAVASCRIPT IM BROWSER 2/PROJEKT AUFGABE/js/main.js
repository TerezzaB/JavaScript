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
