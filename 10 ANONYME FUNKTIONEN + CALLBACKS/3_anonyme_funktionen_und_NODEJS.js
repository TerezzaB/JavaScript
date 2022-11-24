"use strict"

const fs = require("fs")

/*
//Wenn du den Inhalt des Ordners hast, mache bitte die folgende Funktion
fs.readdir(__dirname, (err, files) => {
    console.log(files)
})
*/


//wir konnen das auch als eine Variable benutzen
const f = (err, files) => {
    console.log(files)
}
fs.readdir(__dirname, f)

/*
//Es funktioniert auch wie eine "normale" Funktion 
function f (err, files){
    console.log(files)
}
fs.readdir(__dirname, f)
*/

///////////////////////////////////////////////////////////////
////////////////////////CALLBACKFUNKTION///////////////////////
///////////////////////////////////////////////////////////////


//Lese bitte diese Datei ein, und wenn diese Datei fertig eingelesen ist, 
//oder ein Fehler aufgetreten ist, dann rufe diese Funktion mit entsprechcenden Parametern auf
fs.readFile("daten.txt", {encoding: "utf-8"}, (err, data) => {
    console.log(data)
})

