"use strict"

const data = [
  { firstname: 'Max', age: 21, enrolled: true },
  { firstnaem: 'Laura', age: 35, enrolled: false }
]

const dataJSON = JSON.stringify(data)
console.log("dataJSON: ", dataJSON)
console.log("typeof dataJSON: ", typeof dataJSON)

//ANTIPATTERN! fs.writefileSync() ist langsam!!!
const fs = require("fs")
fs.writeFileSync("ausgeben.json", dataJSON)

