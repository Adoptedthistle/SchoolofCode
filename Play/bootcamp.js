const bootcamper = [
  "Mell",
  "Jodie",
  "Mark",
  "Charles",
  "Helen",
  "Mark2",
  "Patrick",
  "Say"
];

function getRandomBootcamper() {
  const index = Math.floor(bootcampers.length * Math.random);
  return bootcampers[index];
}

console.log(getRandomBootcamper);

const chalk = require("chalk");

console.log(chalk.blue(bootcamper));
