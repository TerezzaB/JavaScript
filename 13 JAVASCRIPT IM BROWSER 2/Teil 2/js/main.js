"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector(".container h1")
  console.log(heading)


  const cardHeadings = document.querySelectorAll(".card div.card-header")  ///!!!!!entsteht ARRAY von allen 3 Elementen
  //Wenn wir damit arbeiten wollen, brauchen wir selbstverständlich eine FOR schleife
  for (const e of cardHeadings)
  {
    console.log(e)
  }
  console.log(cardHeadings)

  const container = document.querySelector(".container")
  const containerHeading = container.querySelectorAll("h1") //entsteht ARRAY mit 1 Element

  console.log(containerHeading)

})
