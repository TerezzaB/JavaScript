"use strict"

const https = require("https")
const http = require("http")
const { fstat } = require("fs")

const url = "https://api.spacexdata.com/v4/launches/latest"


//1. Rufe bitte die URL Adresse auf, dann macht das https module fur uns (es kummert sich um all die Handshakes)
//2. und sobald es die Antwort gibt (also Server hat uns "geantwortet"), wird diese CALLBACK Funktion aufgerufen
//Diese FUnktion wird nicht gleich jetzt ausgewertet, aber nur dann, wenn wir eine Antwort aus dem Server bekommen
//Deshalb haben wir sie als eine ANONYME Funktion geschrieben
https.get(url, res => {
    let data = ""
    //Wenn jetzt Daten zurück geschikt werden, dann soll doch eine Funktion aufgerufen werden
    res.on("data", chunk=> {
        console.log("chunk: ", chunk)
        data += chunk
    })

    res.on("end", () => {
        const dataAsObj = JSON.parse(data)
        console.log(dataAsObj)
    })
    ///console.log(res.statusCode)
})

