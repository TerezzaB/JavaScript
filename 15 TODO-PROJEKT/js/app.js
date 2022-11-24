"use strict"

const KEY_ENTER = 13

document.addEventListener("DOMContentLoaded", () => {
    const newToDo = document.getElementById("new-todo")
    const todolist = document.querySelector(".todo-list")
    const footerElement = document.querySelector(".footer")
    const todoCounter = footerElement.querySelector(".todo-count strong")

    const refreshFooter = () => {

        if (todolist.children.length === 0) {
            footerElement.style.display = "none"
        }
        else {
            footerElement.style.display = ""
        }

        let count = 0
        for (const todolistElem of todolist.children) {
            if (!todolistElem.classList.contains("completed")) {
                count++
            }
        }
        todoCounter.innerText = count
    }
    refreshFooter()

    const callbackLiElement = (liElement) => {
        const destroyButton = liElement.querySelector(".destroy")
        const toggleCircle = liElement.querySelector(".toggle")

        toggleCircle.addEventListener("change", () => {
            if (toggleCircle.checked) {
                liElement.classList.add("completed")
            }
            else {
                liElement.classList.remove("completed")
            }
            refreshFooter()
        })

        destroyButton.addEventListener("click", () => {
            liElement.remove()

            refreshFooter()
        })
    }


    newToDo.addEventListener("keypress", (event) => {
        if (event.keyCode === KEY_ENTER) {
            const inputText = newToDo.value
            if (inputText === "") {
                alert("Text value ist leer.")
                return
            }

            const createdInputElement = document.createElement("input")
            createdInputElement.classList.add("toggle")
            createdInputElement.type = "checkbox"

            const createdLabelElement = document.createElement("label")
            createdLabelElement.append(document.createTextNode(inputText))

            const createdNewButton = document.createElement("button")
            createdNewButton.classList.add("destroy")

            const createdDivElement = document.createElement("div")
            createdDivElement.classList.add("view")
            createdDivElement.appendChild(createdInputElement)
            createdDivElement.appendChild(createdLabelElement)
            createdDivElement.appendChild(createdNewButton)

            const createdLiElement = document.createElement("li")
            createdLiElement.appendChild(createdDivElement)

            callbackLiElement(createdLiElement)

            todolist.prepend(createdLiElement)  //wie appendChild, aber es wird am Anfang hinzugefügt

            newToDo.value = ""

            refreshFooter()
        }
    })
})