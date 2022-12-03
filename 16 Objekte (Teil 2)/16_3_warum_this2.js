"use strict"

const printStudent = function () {
    console.log("Full name: " + this.firstname, this.lastname)
}


const students = [
    {
        firstname: "Max",
        lastname: "Some_Lastname",
        printName: printStudent
    },

    {
        firstname: "Monika",
        lastname: "Some_Lastname",
        printName: printStudent
    }
]

const students2 = [
    {
        age: 27,
        firstname: "Name2",
        printName: printStudent
    }
]

students[0].printName()
students[1].printName()
students2[0].printName() ///Full name: Name2 undefined