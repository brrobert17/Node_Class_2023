/* console.log(random(0,10)) */
//possible because of hoisting
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min)
}

const anonymusFunction = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min)
};

/* const randomArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) - min)
}; */

const randomArrowFunctionCompact = (min, max) => Math.floor(Math.random() * (max - min + 1) - min);

/* console.log(randomArrowFunctionCompact(0,10)) */

function genericActionPerformer(genericAction, genericName) {
    //do stuff
    return genericAction(genericName);
}

const subtract = (name) => `${name} is subtracting`

console.log(genericActionPerformer(subtract, "tobias"))

const walk = (name) => `${name} is walking`
console.log(genericActionPerformer(walk, "nicolas"))

console.log(genericActionPerformer((name)=> `${name} is reading`, "andrea"))