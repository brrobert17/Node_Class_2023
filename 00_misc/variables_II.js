"use strict"
/* totalGlobalVariable = "Never do this"
var globalVariable = "not this either"
console.log(totalGlobalVariable)
console.log(globalVariable) */
/* 
{
    var someValue = true
    {
        var someValue = false
    }
    console.log(someValue)
} */

/* {
    let someValue = true
    {
        let someValue= false
    }
    console.log(someValue)
} */

/* for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}   */

for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}