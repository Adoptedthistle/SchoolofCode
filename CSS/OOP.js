const footballer1 = makeFootballer9("Harry", "Kane", 10, "Spurs", 28);

const footballer2 = makeFootballer("Leo", "Messi", 10, "Barcelona", 32);

const footballer3 = makeFootballer("Jordan", "Henderson", 8, "Liverpool", 29);

const footballer4 = makeFootballer("Ali", "McCoist", 3, "Glasgow Rangers", 56);

/*function makeFootballer(firstName, lastName, shirtNumber, team, age) {
  return {
    firstName,
    lastName,
    shirtNumber,
    team,
    age
  };
}
*/

function Footballer(firstName, lastName, shirtNumber, team, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.shirtNumber = shirtNumber;
  this.team = team;
  this.age = age;
  this.goals = 0;
  this.score = function() {
    this.goals++;
  };
  this.haveBirthday = function() {
    this.age++;
  };
  this.changeTeam = function(newTeam) {
    this.team = newTeam;
  };
}

const footballer1 = new Footballer("Harry", "Kane", 10, "Spurs", 28);

var footballer1 = new Footballer("John", "C", 9, "Newcastle", 29);
var footballer1 = new Footballer("sarah", "B", 9, "Celtic", 25);
