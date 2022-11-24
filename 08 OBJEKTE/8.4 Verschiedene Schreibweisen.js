"use strict"

const student = {
    name: "Max Mustermann",
    age: 21,
    2019: "Ungarisch"
}


console.log(student.age) //Der Unterschied ist, du hier direkt eigenschaft "age" zugreifst
console.log(student["age"])  //hier ist das in [] erstmal ausgewertet, und dann holt es sich die entsprechende Eigenschaft

//Beispiel
const property = "age"
console.log(student[property])  //21 wir ausgedrückt
