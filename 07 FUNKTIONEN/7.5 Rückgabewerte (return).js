"use strict"

const items = [15, 25, 30]

function sume(liste)
{
    let s = 0;
    for (let element of liste)
    {
        s+= element
    }
    return s
}

let itemsSum = sume(items)
console.log(itemsSum)