"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const contactButton = document.getElementById("contact-me") //nach ID in HTML

  /*
  const onClick = (event) => {
    console.log(event)
    alert("Kontakt wurde geklickt!")
  }
  contactButton.addEventListener("click", onClick)
  */

  //Wenn diesen Button geclickt wird, soll folgende Funktion ausgeführt werden
  contactButton.addEventListener("click", (event) => {
    event.preventDefault() //wenn darauf gelickt wird, dann soll der Standardfall verhindert werden. 
    //Also jetzt wenn ich darauf clicke, öffnet sich mein Mail - Workspace nicht mehr
    alert("Kontakt wurde geklickt!")
  })
  

})
