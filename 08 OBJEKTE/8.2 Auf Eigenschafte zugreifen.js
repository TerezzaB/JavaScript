"use strict"

const student = {
    name: "Max Mustermann",
    age: 21,
    subject: "Englisch"
}

student.age = 22  ///wie student["age"] = 22

console.log(student["name"])  ///genau wie student.name
console.log(student.age)
console.log(student.subject)

