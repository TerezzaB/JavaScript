"use strict"
/*
setTimeout(function () {
    console.log("Hallo Welt")
}, 1000)
*/

function runCallback(cb) {
    cb()
}

/*
const data = {
    todos: ["JavaScript lerner", "Node.JS lernen"],
    addTodo: function (todo) {
        this.todos.push(this.todo)
    }
}
*/

const data = {
    todos: ["JavaScript lerner", "Node.JS lernen"],
    addTodo: function (todo) {
        runCallback(() => {
            this.todos.push(todo)
        })
    }
}


data.addTodo("3. Lerne code zu schreiben")
console.log(data)
