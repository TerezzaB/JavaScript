"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const helpElements = document.querySelectorAll("[data-help]")

  for (const helpElement of helpElements) {
    helpElement.addEventListener("click", (event) => {
      event.preventDefault()

      const helpText = helpElement.attributes["data-help"].vlaue
      alert(helpText)
    })
  }

  ///Die DOM navigieren
  const cardElement = document.querySelector(".card")

  console.log("parentElement: ", cardElement.parentElement)

  console.log("children: ", cardElement.children)
  console.log("number of children: ", cardElement.childElementCount)
  console.log("child on position [0]: ", cardElement.children[0])

  console.log("next Element Sibling: ", cardElement.nextElementSibling)
  console.log("previous Element Sibling: ", cardElement.previousElementSibling)



})
