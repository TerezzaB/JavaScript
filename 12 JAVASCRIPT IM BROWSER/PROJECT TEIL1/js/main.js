"use strict"

document.addEventListener("DOMContentLoaded", () => {
    let iter = 0

    const buttonClicked = document.getElementById("clickHere")
    const ClickAnzahl = document.getElementById("clickChanged")
    const resetButton = document.getElementById("resetButton")

    buttonClicked.addEventListener("click", () => {
        iter++
        ClickAnzahl.innerText = "Anzahl Klicks: " + iter
    })

    resetButton.addEventListener("click", () => {
        iter = 0
        ClickAnzahl.innerText = "Anzahl Klicks: " + iter

    })
})

