//destructure
const { tanks } = require("./tanks.json");

console.log(module);

function getTanks() {
  return tanks;
}

function addTank(tank) {
  tank.push(tank);
  return tank;
}

module.exports = {
  getTanks,
  addTank,
};
