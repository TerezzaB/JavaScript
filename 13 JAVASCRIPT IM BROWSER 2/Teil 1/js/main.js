"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const cardHeaders = document.getElementsByClassName("card-header") //gibt uns zurück eine Liste
  console.log(cardHeaders)


  for (const cardHeader of cardHeaders)
  {
    console.log(cardHeader)  

    cardHeader.addEventListener("click", () => {   //!!!!!wir mussen addEventListener beim jeden einzigen Element separat geben...deshalb machen wir das in For-Schleife
      alert("CardHeader wurde geclickt.")           //das existiert nicht!!!!!!! cardHeaderS.addEventListener
    })
  }

  const paragraphs = document.getElementsByTagName("p")
  console.log(paragraphs)

})


