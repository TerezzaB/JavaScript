"use strict"

const student = {
    name: "Max Mustermann",
    age: 21,
    enrolled: false,
    numberOfCourses: null //oder auch 0
}



if (student.numberOfCourses) //wir fragen ob diesen Parameter NICHT FALSCH ist (also alles außer "false" oder "null" Wert)
{
    console.log("Willkommen", student.name)
}

if ("numberOfCourses" in student)  //wir fragen ob diesen Parameter existiert
{
    console.log("Hey")
}

