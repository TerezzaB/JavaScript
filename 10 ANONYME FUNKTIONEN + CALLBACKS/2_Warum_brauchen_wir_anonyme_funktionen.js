"use strict"

//Warum benötigen wir anonyme Funktionen? -> beispiel (erklären wir später)
/*
const fs = require("fs")
fs.readdir(__dirname, (err, files) => {
    console.log(files)
})
*/

const sayHello = () => {
    console.log("Olla!")
}

console.log(sayHello) ///Ergebnis:  [Function: sayHello]
//Ergebnis ist eine anonyme Funktion in Variable "sayHello", also anonyme Funktion ist in der Variable "sayHello" gespeichert.

console.log(sayHello()) ///Ergebnis: "Olla!" undefined
//Die Funktion ist ausgeführt/ausgewertet und Rückgbewert ist undefined

/*const a = () => {
    console.log("Hallo du!")
}*/

const a = sayHello
a()     //Ergebnis: "Olla!"

