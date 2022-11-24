"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const closeButtons = document.querySelectorAll("[data-dismiss='alert']")

    for (const closeButton of closeButtons) {
        closeButton.addEventListener("click", () => {
            ///!!!Wenn du ein Element nicht mehr benötigst, mach dass Sinn, dass du es nicht nur ausblendest, sondern auch tatsächlich entfernst!!! 
            closeButton.parentElement.remove()
            //nicht closeButton.parentElement.style.display = "none"
        })
    }
})
