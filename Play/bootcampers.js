const bootcampersNames = [
  "Patrick",
  "Mark",
  "Helen",
  "Liz",
  "Cheryl",
  "Mell",
  "James",
  "Hannah"
];

const boocampers = [];

bootcampersNames.forEach(function(name) {
  const bootcamper = new Bootcamper(name);
  bootcampersNames.push(bootcamper);
});

console.log(bootcampers);
