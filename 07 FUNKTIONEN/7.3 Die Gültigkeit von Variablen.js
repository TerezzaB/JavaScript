"use strict"

let message = "Test!"

function sayHello(name)
{
    const message = "Hallo " + name + "!"  ///OHNE CONST, oder LET -> FEHLER!
    console.log(message)
}

sayHello("Max")
console.log(message)

