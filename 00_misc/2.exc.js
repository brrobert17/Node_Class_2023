// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2


// --------------------------------------
const sum = +numberOne + +numberTwo
console.log(sum)

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const sumDec = sum.toFixed(2)
console.log(sumDec)
// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const aSum = ((one + two + three)/3).toFixed(5);
console.log(aSum)




// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const lArr = letters.split("")
console.log(lArr[2])


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
const result = fact.replace("j", "J")
console.log(result)


const mArr = fact.split("")
const index = mArr.indexOf("j")
console.log(mArr)
mArr.splice[1, 1, 'J']
const fact2 = mArr.toString()
const fact3 = fact2.replaceAll(',', '')
console.log(fact3)

const ee = ['one', 'two', 'three']
ee.splice(1, 1, 'hh')
console.log(ee)
// --------------------------------------