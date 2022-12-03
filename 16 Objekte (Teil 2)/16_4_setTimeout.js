"use strict"

//Diese Funktion wird (1-MAL) nach 1000 Milisekunden (1 Sekunde) durchgeführt
setTimeout(() => {
    console.log("Hallo welt na 1000 milisekunden!")
}, 1000)


//Diese Funktion wird (ALLE) 1000 Milisekunden durchgeführt
setInterval(() => {
    console.log("Hallo Welt (jede Sekunde)")
}, 1000)

