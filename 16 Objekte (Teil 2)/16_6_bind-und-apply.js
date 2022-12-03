"use strict"

const printStudentName = function () {
    console.log(this.lastname + ", " + this.firstname)
}

const students = [
    { firstname: "Leonard", lastname: "Hofstatter" },
    { firstname: "Sheldon", lastname: "Cooper" }
]

//.bind() erstellt eine neue Funtion, bei der der Kontext "this" auf den entsprechend Parameter (hier: students[0]) gesetzt ist
printStudentName.bind(students[0])() ///es wechselt "this" auf students[0] (in printStudentName), und gleich danach wird die Funktion ausgefuhrt


//.apply() fuhrt eine Funktion aus, hierbei wird der Kontext "this" auf den ersten Parameter (hier: students[1]) gesetzt
//Die Funktionsparameter werden als ARRAY ubergeben - hier rufen wir die Funktion ohne Parameter auf, daher ubergen wir ein leeres Array
printStudentName.apply(students[1], [])