"use strict"

///1. Art von Funktionen -> "Normale" Funktion
//FUNCTION DECLARATION
function sayHello(name)
{
    console.log("Hello", name)
}
sayHello("Max")


///2. Art von Funktionen -> Anonyme Funktion
//FUNCTION EXPRESSION
const sayHello2 = function(name)
{
    console.log("Hello2", name)
}

sayHello2("Ela")


///3. Art von Funktionen -> Anonyme Funktionen 
///FUNCTION EXPRESSION
const sayHello3 = (name) => 
{
    console.log("Hello3", name)
}
sayHello3("Eve")

