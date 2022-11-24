"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const firstCardHeader = document.getElementsByClassName("card-header")[0] ///damit hole ich das 1 Element

  /* 1 MOGLICHKEIT (verweendet man nicht sehr oft)
  console.log(firstCardHeader.attributes)
  console.log(firstCardHeader.attributes[0])
  console.log(firstCardHeader.attributes[1])
  console.log(firstCardHeader.attributes["data-extra"])
  */

  /* 2 MOGLICHKEIT
  console.log(firstCardHeader.atributes["class"]) 
  console.log(firstCardHeader.atributes.class) 
  console.log(firstCardHeader.attributes["data-extra"])
  */
  
  const dataExtraAtribute = firstCardHeader.attributes["data-extra"]
  console.dir(dataExtraAtribute)

})
