"use strict"

// https://github.com/r-spacex/SpaceX-API
// launches.json: https://api.spacexdata.com/v3/launches

// Datei einlesen. fs.readFileSync() ist Anti-Pattern, dazu
// aber später mehr.
const fs = require("fs")
const launches = JSON.parse(
  fs.readFileSync("spacex/launches.json", {encoding: "utf-8"})
)

console.log("Anzahl launches:", launches.length)

// Aufgaben:
//
// 1) Wie viele Raketen hat SpaceX im Jahr 2018 gestartet?
//    1a) Wie viele davon erfolgreich
//    1b) Wie viele davon nicht erfolgreich?
//
//    Hinweis: Schau' dir dazu die Eigenschaften "launch_year" und
//             "launch_success" an!
//
//    Hinweis 2: Es kann sein, dass in manchen Jahren alle Rakentenstarts
//    zu 100% erfolgreich waren. In dem Fall soll dein Code trotzdem so
//    entwickelt sein, dass überprüft wird, ob der Startvorgang erfolgreich
//    war oder nicht!

let numberOfSuccesses = 0
let numberOfFailes = 0
let launches_of_2018_success = 0
let launches_of_2018_failed = 0

//ALL THE LAUNCHES
for (const launch of launches)
{
    ///console.log(launch)
    if ((launch.launch_year <= 2018) && (launch.launch_success == true))
    {
        numberOfSuccesses++
    }
    else if ((launch.launch_year <= 2018) && (launch.launch_success == false))
    {
        numberOfFailes++
    }
}


//LAUNCHES ONLY IN YEAR 2018
for (const launch of launches)
{
    if ((launch.launch_year == 2018) && (launch.launch_success == true))
    {
        launches_of_2018_success++
    } 
     else if ((launch.launch_year == 2018) && (launch.launch_success == false))
    {
        launches_of_2018_failed++
    }
}

console.log("Success launches beginning - 2018: ", numberOfSuccesses)
console.log("Failed launches beginning - 2018: ", numberOfFailes)
console.log("Overall launches beginning - 2018:", numberOfSuccesses + numberOfFailes)

console.log("\n")

console.log("Success saunches of the 2018 year: ", launches_of_2018_success)
console.log("Failed launches of the 2018 year: ", launches_of_2018_failed)
console.log("Overall launches in year 2018:", launches_of_2018_failed + launches_of_2018_success)

console.log("\n")
// 2) Wie viele kg Nutzlast wurden im Jahr 2018 *erfolgreich* ins Weltall 
//    gestartet?
//
//    Du findest die Nutzlast unter "rocket", "second_stage", "payloads",
//    dann das entsprechende Payload, und von dem die Eigenschaft
//    "payload_mass_kg".
//  
//    Hinweis: 
//    Bitte beachte, dass eine Rakete u.U. mehrere Satelliten haben kann!

let mass_KG = 0

for (const launch of launches)
{

    if (launch["launch_year"] !== "2018" || launch["launch_success"] === false)
    {
        continue    
    }


    const secondStage = launch["rocket"]["second_stage"]
    
    for (const payload of secondStage["payloads"])
    {
        const kg = payload["payload_mass_kg"]
        mass_KG += kg
    }

}

console.log("KGs im Waltall fur das Jahr 2018: ", mass_KG)

