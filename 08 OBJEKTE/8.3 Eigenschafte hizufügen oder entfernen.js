"use strict"

const student={
    name: "Max Mustermann",
    age: 21
}

student.age = 22

student.subject = "Englisch" //wird in den objekt hizugefugt

student.interestedIn = "Bulgarische Sprache"

//ENTFERNEN
delete student.age

console.log("student", student)
