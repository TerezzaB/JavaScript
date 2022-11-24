"use strict"

const students = ["Max"]

function addStudent(name)
{
    students.push(name)
}

addStudent("Erika") ///es geht drucken, aber es ist ein Seitenefekt

console.log("students:", students)
